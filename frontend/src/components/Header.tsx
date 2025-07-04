import { AppBar, Toolbar, Typography, IconButton, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../theme/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useMemo, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import axios from '../api/axios';
import { debounce } from 'lodash';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
  };
}

export default function Header() {
  const livros: any = [];
  const { isDark, toggleTheme } = useThemeMode();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchType, setSearchType] = useState<'general' | 'isbn'>('general');
  const [inputValue, setInputValue] = useState('');

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
      let query = type === 'isbn' ? `isbn:${searchTerm}` : searchTerm;
      const response = await axios.get('/livros/search', {
        params: {
          q: query,
          maxResults: 5,
          searchType: type,
        },
      });
      console.log("teste fetchBooks", response.data);
      setSearchResults(response.data || []);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Falha na busca. Tente novamente.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, 500), [searchType]);  // <-- adiciona searchType aqui

  useEffect(() => {
    fetchBooks(inputValue, searchType);
  }, [inputValue, searchType, fetchBooks]);

  const handleBookSelect = (event: React.SyntheticEvent, value: Book | null) => {
    if (value) {
      navigate(`/livro/${value.id}`);
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
                onChange={(e) => setSearchType(e.target.value as 'general' | 'isbn')}
                label="Tipo de busca"
                sx={{ height: 40 }}
              >
                <MenuItem value="general">Geral</MenuItem>
                <MenuItem value="isbn">ISBN</MenuItem>
              </Select>
            </FormControl>

            <Autocomplete
              disablePortal
              options={searchResults}
              loading={loading}
              getOptionLabel={(option) =>
                searchType === 'isbn'
                  ? `${option.volumeInfo.title}`
                  : option.volumeInfo.title
              }
              renderOption={(props, option) => (
                <li {...props}>
                  <div>
                    <div>{option.volumeInfo.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                      {option.volumeInfo.authors?.join(', ')}

                    </div>
                  </div>
                </li>
              )}
              sx={{ width: 250 }}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                fetchBooks(newInputValue, searchType);
              }}
              onChange={handleBookSelect}
              inputValue={inputValue}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={searchType === 'isbn' ? "Digite o ISBN" : "Pesquise seu livro"}
                  type={'text'}
                  sx={{
                    '& .MuiInputBase-root': { height: 40 },
                    '& .MuiFormLabel-root': { position: 'absolute', top: '-20%' }
                  }}
                />
              )}
            />
          </Box>
          <Button color="inherit" onClick={() => navigate('/sobre')}>
            Meus livros
          </Button>
          <Button color="inherit" onClick={() => navigate('/sobre')}>
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
    </AppBar>
  );
};
