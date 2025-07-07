import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Acervros from './pages/Acervros';
import { ThemeProvider } from './theme/ThemeContext';
import { Box } from '@mui/material';
import axios from './api/axios';
import { useState } from 'react';
import gifFundo from './assets/gifs.gif';

let userValid = false;
const getUsuario = async () => {
  try {
    const response = await axios.get('/me');
    return response.data.user;
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
    return null;
  }
}
getUsuario().then(user => {
  if (user) {
    userValid = true;
    console.log('Usuário autenticado:', user);
  } else {
    userValid = false;
    console.log('Usuário não autenticado');
  }
}).catch(error => {
  console.error('Erro ao verificar autenticação:', error);
});

function App() {

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Box sx={{
            backgroundImage: `url(${gifFundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
          }} >
            <Box sx={{ background: 'linear-gradient(125deg,rgba(194, 191, 224, 0.9) 0%, rgba(75, 75, 171, 0.9) 20%, rgba(79, 43, 107, 0.9) 40%, rgba(0, 0, 0, 0.9) 100%)', height: '100%', overflow: 'hidden' }}>
              <Box sx={{
                maxWidth: '900px', margin: '0 auto', borderRadius: 0, height: '100%', overflowY: 'scroll', pr: 1, '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#888',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: '#555',
                },
                scrollbarWidth: 'thin', // Firefox
                scrollbarColor: '#888 transparent', // Firefox
              }}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/meus-acervros"
                    element={
                      <PrivateRoute>
                        <Acervros />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </Box>
            </Box>

          </Box>

        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
} export default App;
