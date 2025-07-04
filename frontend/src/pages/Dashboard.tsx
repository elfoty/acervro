import { useEffect, useState } from 'react';
import {
    Box, Typography, CircularProgress, Alert, Card, CardContent, CardHeader, Container,
} from '@mui/material';
import { Grid } from '@mui/material';
import axios from '../api/axios';
import Header from '../components/Header';
interface Livro {
    nome: string
    ISBN: string
    paginas: number
    lancamento: string // ISO format string
    autorIds: number[]
    categoriaIds: number[]
}
export default function Dashboard() {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    useEffect(() => {
        const carregarPoderes = async () => {
            try {
                const response = await axios.get('/livros');
                setLivros(response.data);
            } catch (err: any) {
                setErro('Erro ao carregar os poderes');
            } finally {
                setCarregando(false);
            }
        };
        carregarPoderes();
    }, []);
    return (
        <>
        <Header />
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Lista de Livros
            </Typography>
            {carregando ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress />
                </Box>
            ) : erro ? (
                <Alert severity="error">{erro}</Alert>
            ) : (
                <Grid container spacing={3}>
                    {livros.map((livro) => (
                        <Grid size={12}>
                            <Card elevation={3}>
                                <CardHeader title={livro.nome} />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {livro.ISBN}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
        </>
    );
}
