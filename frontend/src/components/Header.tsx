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

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    industryIdentifiers?: Array<{
      type: string;
      identifier: string;
    }>;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export default function Header() {
  const { isDark, toggleTheme } = useThemeMode();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchType, setSearchType] = useState<'general' | 'isbn'>('general');
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState<Book | null>(null);
  const [linkThumbnail, setLinkThumbnail] = useState<string | null>(null);
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

    try {
      const response = await axios.get('/livros/search', {
        params: {
          q: type === 'isbn' ? `isbn:${searchTerm}` : searchTerm,
          maxResults: 10,
          searchType: type,
        },
      });

      setSearchResults(response.data || []);
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

  const handleBookSelect = (event: React.SyntheticEvent, value: Book | null) => {
    if (value) {
      setLivroSelecionado(value);
      setModalOpen(true);
    }
  };

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                    <img
                      src={option?.volumeInfo.imageLinks?.thumbnail}
                      alt="thumb-small"
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
          <Button color="inherit" onClick={() => navigate('/meus-acervos')}>
            Meus acervos
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
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{ p: 4, bgcolor: 'background.paper', m: 'auto', mt: 10, width: 300 }}>
          <h2>{livroSelecionado?.volumeInfo.title}</h2>
          <img
            src={livroSelecionado?.volumeInfo.imageLinks?.thumbnail}
            alt="thumb-small"
            style={{ maxWidth: 200 }}
          />
          <Button onClick={() => setModalOpen(false)}>Fechar</Button>
        </Box>
      </Modal>
    </AppBar>
  );
}