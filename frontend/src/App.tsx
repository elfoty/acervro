import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from './theme/ThemeContext';
import { Box } from '@mui/material';


function App() {


  return (
    <ThemeProvider>
    <AuthProvider>
      <Router>
        <Box style={{ maxWidth: '720px', margin: '0 auto' }}>
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
          </Routes>
        </Box>
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
} export default App;
