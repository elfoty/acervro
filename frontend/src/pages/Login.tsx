import { useState } from 'react';
import {
    Box, Button, TextField, Typography, Snackbar, Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import axios from '../api/axios';
export default function Login() {
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth/login', {
                email,
                senha,
            }, {
                withCredentials: true // <--- apenas se back usa cookie auth
            })
            const { token } = response.data;
            setToken(token); // atualiza o contexto e salva no localStorage
            navigate('/');
        } catch (err: any) {
            setErro(err.response?.data?.message || 'Erro ao fazer login');
        }
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                px: 2,
                gap: 2
            }} // fundo semi-transparente
        >
            <Typography variant="h4">Login</Typography>
            <TextField
                label="Email de usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{
                    '& .MuiInputBase-input': { // Cor do texto digitado
                        color: '#ffffff', // Branco
                        mixBlendMode: 'overlay'
                    },
                    '& .MuiInputLabel-root': { // Cor do label
                        color: '#ffffff', // Cinza claro
                        mixBlendMode: 'overlay'
                    },
                    '& .MuiOutlinedInput-root': { // Cor da borda
                        '& fieldset': {
                            borderColor: '#ffffff', // Cinza
                            mixBlendMode: 'overlay'
                        },
                        '&:hover fieldset': {
                            borderColor: '#ffffff', // Branco ao passar o mouse
                            mixBlendMode: 'overlay'
                        },
                    },
                }}
            />
            <TextField
                label="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                fullWidth
                sx={{
                    '& .MuiInputBase-input': { // Cor do texto digitado
                        color: '#ffffff', // Branco
                        mixBlendMode: 'overlay'
                    },
                    '& .MuiInputLabel-root': { // Cor do label
                        color: '#ffffff', // Cinza claro
                        mixBlendMode: 'overlay'
                    },
                    '& .MuiOutlinedInput-root': { // Cor da borda
                        '& fieldset': {
                            borderColor: '#ffffff', // Cinza
                            mixBlendMode: 'overlay'
                        },
                        '&:hover fieldset': {
                            borderColor: '#ffffff', // Branco ao passar o mouse
                            mixBlendMode: 'overlay'
                        },
                    },
                }}
            />
            <Button variant="contained" sx={{ color:'#b98fe0' ,mixBlendMode: 'overlay'}}fullWidth onClick={handleLogin}>
                Entrar
            </Button>
            <Snackbar open={!!erro} autoHideDuration={4000} onClose={() => setErro('')}>
                <Alert severity="error">{erro}</Alert>
            </Snackbar>
        </Box>
    );
}
