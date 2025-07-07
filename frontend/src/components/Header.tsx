import { AppBar, Toolbar, IconButton, Button, Box, FormControl, InputLabel, Select, MenuItem, CircularProgress, Modal } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../theme/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../auth/AuthContext';
import { useMemo, useEffect, useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from '../api/axios';
import { debounce } from 'lodash';
import semCapa from '../assets/capaind.png';
import { ImagemComFallback } from './ImagemComFallback';

interface Livro {
  nome: string
  ISBN: string
  paginas: number
  lancamento: string // ISO format string
  autorIds: number[]
  categoriaIds: number[]
  capa?: string // URL da imagem da capa (opcional)
  descricao: string // Descrição do livro (opcional)
}

export default function Header() {
  const { isDark, toggleTheme } = useThemeMode();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchType, setSearchType] = useState<'general' | 'isbn'>('general');
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState<any | null>(null);
  const [linkThumbnail, setLinkThumbnail] = useState<string | null>(null);
  const [livros, setLivros] = useState<Livro[]>([]);
  //const { user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const fetchBooks = useMemo(() => debounce(async (searchTerm: string, type: 'general' | 'isbn') => {
    if (searchTerm.length < (type === 'isbn' ? 10 : 3)) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    const carregarLivros = async () => {
      const usuario = await axios.get('/me');
      const response = await axios.get('/livros/' + usuario.data.user.id);
      setLivros(response.data);
    };
    carregarLivros();

    try {
      const response = await axios.get('/livros/search', {
        params: {
          q: type === 'isbn' ? `isbn:${searchTerm}` : searchTerm,
          maxResults: 5,
          searchType: type,
        },
      });
      if (response.data) {
        const livrosDoBanco = livros.map((livro) => livro.ISBN);

        const filtrados = response.data.filter((item: any) => {
          const identifiers = item.volumeInfo.industryIdentifiers;
          if (!identifiers) return true; // mantém caso não tenha ISBN

          // Tenta pegar o ISBN_13 ou qualquer outro disponível
          const isbnAPI = identifiers.find((id: any) => id.type === 'ISBN_13')?.identifier
            || identifiers.find((id: any) => id.identifier)?.identifier;

          return isbnAPI && !livrosDoBanco.includes(isbnAPI);
        });

        setSearchResults(filtrados);
      } else {
        setSearchResults([]);
      }

    } catch (err) {
      console.error('Erro na busca:', err);
      setError('Falha na busca. Tente novamente.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, 500), []);

  useEffect(() => {
    if (inputValue) {
      fetchBooks(inputValue, searchType);
    }
    return () => fetchBooks.cancel();
  }, [inputValue, searchType, fetchBooks]);

  const handleBookSelect = (event: React.SyntheticEvent, value: any | null) => {
    if (value) {
      setLivroSelecionado(value);
      setModalOpen(true);
    }
  };

  const addLivro = async () => {
    if (!livroSelecionado) return;

    try {

      const usuario = await axios.get('/me');
      await axios.post('/livros', {
        nome: livroSelecionado.volumeInfo.title,
        autores: livroSelecionado.volumeInfo.authors,
        descricao: livroSelecionado.volumeInfo.description,
        lancamento: livroSelecionado.volumeInfo.publishedDate,
        paginas: livroSelecionado.volumeInfo.pageCount,
        categorias: livroSelecionado.volumeInfo?.categories,
        ISBN: livroSelecionado.volumeInfo.industryIdentifiers?.find((id: { type: string; identifier: string }) => id.type === 'ISBN_13')?.identifier,
        usuarioId: usuario.data.user.id,
        capa: livroSelecionado.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
      });
      setModalOpen(false);
      setLivroSelecionado(null);
      setInputValue('');
      setSearchResults([]);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }
  };

  function formatarData(data: any) {
    if (!data) return 'Não disponível';

    // Se for apenas um ano (ex: "2008")
    if (/^\d{4}$/.test(data)) {
      return data;
    }

    try {
      // Tenta parsear a data no formato ISO (ex: "2008-08-01T00:00:00.000Z")
      const dateObj = new Date(data);

      // Verifica se é uma data válida
      if (isNaN(dateObj.getTime())) {
        return data; // Retorna o valor original se não for uma data válida
      }

      // Formata como DD/MM/AAAA
      const dia = String(dateObj.getDate()).padStart(2, '0');
      const mes = String(dateObj.getMonth() + 1).padStart(2, '0');
      const ano = dateObj.getFullYear();

      return `${dia}/${mes}/${ano}`;
    } catch (e) {
      return data; // Retorna o valor original em caso de erro
    }
  }

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, height: '80px' }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Tipo de busca</InputLabel>
              <Select
                value={searchType}
                onChange={(e) => {
                  setSearchType(e.target.value as 'general' | 'isbn');
                  setSearchResults([]);
                }}
                label="Tipo de busca"
                sx={{ height: 40 }}
              >
                <MenuItem value="general">Geral</MenuItem>
                <MenuItem value="isbn">ISBN</MenuItem>
              </Select>
            </FormControl>

            <Autocomplete
              key={searchType} // Força recriação ao mudar o tipo
              disablePortal
              options={searchResults}
              loading={loading}
              getOptionLabel={(option) => option.volumeInfo.title}
              renderOption={(props, option) => (
                <li {...props}>
                  <div>
                    <ImagemComFallback
                      src={option?.volumeInfo.imageLinks?.thumbnail}
                      fallbackSrc={semCapa}
                      alt={option.volumeInfo.titl}
                      style={{ maxWidth: 50 }}
                    />
                    <div><strong>{option.volumeInfo.title}</strong></div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                      {searchType === 'isbn'
                        ? `ISBN: ${option.volumeInfo.industryIdentifiers?.[0]?.identifier || 'Não disponível'}`
                        : option.volumeInfo.authors?.join(', ')}
                    </div>
                  </div>
                </li>
              )}
              sx={{ width: 200 }}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              onChange={handleBookSelect}
              inputValue={inputValue}
              noOptionsText={
                loading
                  ? "Carregando..."
                  : inputValue.length > 0
                    ? "Nenhum resultado encontrado"
                    : "Digite para buscar"
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={searchType === 'isbn' ? "Digite o ISBN" : "Pesquise seu livro"}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                  helperText={error}
                  sx={{
                    '& .MuiInputBase-root': { height: 40 },
                    '& .MuiFormLabel-root': { position: 'absolute', top: '-20%' }
                  }}
                />
              )}
              filterOptions={(options) => options} // Desativa filtro local
            />
          </Box>
          <Button color="inherit" onClick={() => navigate('/')}>
            Meus livros
          </Button>
          <Button color="inherit" onClick={() => navigate('/meus-acervros')}>
            Meus acervros
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" onClick={toggleTheme}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Box>
      </Toolbar>
      <Modal open={modalOpen} onClose={() => { setModalOpen(false), setLivroSelecionado(null) }}>
        <Box sx={{ p: 4, bgcolor: 'background.paper', m: 'auto', mt: 5, width: 600, borderRadius: 3 }}>
          <h2 style={{ textAlign: 'center' }}>{livroSelecionado?.volumeInfo.title}</h2>
          <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2, bgcolor: '#c3c3c3' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', height: '300px', overflowY: 'scroll', margin: 2, paddingRight: 2 }}>
              <img
                src={livroSelecionado?.volumeInfo.imageLinks?.thumbnail}
                alt="thumb-small"
                style={{ maxWidth: 150, marginRight: 20, maxHeight: 150, marginTop: 20 }}
              />
              <Box>
                <p><strong>Autores:</strong> {livroSelecionado?.volumeInfo.authors?.join(', ') || 'Não disponível'}</p>
                <p>
                  <strong>ISBN10:</strong> {livroSelecionado?.volumeInfo.industryIdentifiers?.[0]?.identifier || 'Não disponível'}
                </p>
                <p>
                  <strong>ISBN13:</strong> {livroSelecionado?.volumeInfo.industryIdentifiers?.[1]?.identifier || 'Não disponível'}
                </p>
                <p style={{ height: '150px', overflowY: 'scroll', paddingRight: 20 }}>
                  <strong>Descrição:</strong> {livroSelecionado?.volumeInfo.description || 'Não disponível'}
                </p>
                <p>
                  <strong>Publicado em:</strong> {formatarData(livroSelecionado?.volumeInfo.publishedDate)}
                </p>
                <p>
                  <strong>Páginas:</strong> {livroSelecionado?.volumeInfo.pageCount || 'Não disponível'}
                </p>
                <p>
                  <strong>Link:</strong>
                  <a href={`https://www.google.com/search?q=${livroSelecionado?.volumeInfo.title}`} target="_blank" rel="noopener noreferrer">
                    Ver no Google
                  </a>
                </p>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, color: '#303030' }}>
            <Button onClick={addLivro} sx={{ '&:hover': { backgroundColor: 'lightgreen', } }}>
              <Box sx={{ mixBlendMode: 'difference' }}>
                Adicionar livro
              </Box>
            </Button>
            <Button onClick={() => setModalOpen(false)} sx={{ mixBlendMode: 'difference' }}>Fechar</Button>
          </Box>

        </Box>
      </Modal>
    </AppBar>
  );
}