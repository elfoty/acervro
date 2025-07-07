import { useContext, useEffect, useState } from 'react';
import {
    Box, Typography, CircularProgress, Alert, Card, CardContent, CardHeader, Container,
    Modal,
    Button,
    AlertTitle,
} from '@mui/material';
import { Grid } from '@mui/material';
import axios from '../api/axios';
import Header from '../components/Header';
import semCapa from '../assets/capaind.png'
import { ImagemComFallback } from '../components/ImagemComFallback';

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
export default function Dashboard() {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState<any | null>(null);
    const [imagemValida, setImagemValida] = useState(true);
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const carregarLivros = async () => {
            try {
                const usuario = await axios.get('/me');
                const response = await axios.get('/livros/' + usuario.data.user.id);
                setLivros(response.data);
            } catch (err: any) {
                setErro('Erro ao carregar os Livros');
            } finally {
                setCarregando(false);
            }
        };
        carregarLivros();
    }, []);

    const handleBookSelect = (event: React.SyntheticEvent, value: any | null) => {
        if (value) {
            setLivroSelecionado(value);
            setModalOpen(true);
        }
    };

    const deleteLivro = async () => {
        try {
            if (livroSelecionado?.id)
                await axios.delete('/livro/' + livroSelecionado.id)

            window.location.reload()
        } catch (error) {
            setModalOpen(false);
            const timeout = setTimeout(() => {
                setErro('Erro ao deletar livro');
            }, 3000)
            setErro('');
            clearTimeout(timeout);
        }
    }

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
        <>
            <Header />
            <Box maxWidth="lg" sx={{
                py: 4,
            }}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    Meus Livros
                </Typography>
                {((livros.length == 0) ?
                    <Alert severity="info" variant='outlined' sx={{ mixBlendMode: 'overlay', borderColor: '#fff', color: '#fff', '& .MuiSvgIcon-root ': {fill: '#fff'}}}>
                        Você ainda não possui livros, pesquise por um e adicione.
                    </Alert> : ''
                )}

                {carregando ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : erro ? (
                    <Alert severity="error" variant='outlined' sx={{mixBlendMode: 'overlay', borderColor: '#fff', color: '#fff', '& .MuiSvgIcon-root ': {fill: '#fff'}}}>{erro}</Alert>
                ) : (
                    <Grid container spacing={3} >
                        {livros.map((livro) => (
                            <Grid size={12}>
                                <Card elevation={2} onClick={(event) => handleBookSelect(event, livro)} sx={{ '&:hover': { cursor: 'pointer' }, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ width: '100%' }}>
                                        <CardHeader title={livro.nome} sx={{ width: '100%' }} />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary" sx={{ pb: 2, height: 100, overflowY: 'scroll' }}>
                                                {livro.descricao}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {livro.ISBN}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Box>
                                        <ImagemComFallback
                                            src={livro?.capa}
                                            fallbackSrc={semCapa}
                                            alt={livro.nome}
                                            style={{ maxWidth: 90, marginRight: 20, maxHeight: 90, marginTop: 20 }}
                                        />
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                    <Box sx={{ p: 4, bgcolor: 'background.paper', m: 'auto', mt: 10, width: 800, borderRadius: 3 }}>
                        <h2 style={{ textAlign: 'center' }}>{livroSelecionado?.nome}</h2>
                        <Card sx={{ border: '1px solid', borderRadius: 2, p: 2 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                                <ImagemComFallback
                                    src={livroSelecionado?.capa}
                                    fallbackSrc={semCapa}
                                    alt={livroSelecionado?.nome}
                                    style={{ maxWidth: 150, marginRight: 20, maxHeight: 150, marginTop: 20 }}
                                />
                                <Box>
                                    <p><strong>Autores:</strong> <span>{livroSelecionado?.autores?.map((a: { nome: string }) => a.nome).join(', ') || 'Não disponível'}</span></p>

                                    <p>
                                        <strong>ISBN:</strong> {livroSelecionado?.ISBN || 'Não disponível'}
                                    </p>
                                    <Box sx={{
                                        height: '150px', overflowY: 'scroll', paddingRight: 20,
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
                                        <strong>Descrição:</strong> {livroSelecionado?.descricao || 'Não disponível'}
                                    </Box>
                                    <p>
                                        <strong>Publicado em:</strong> {formatarData(livroSelecionado?.lancamento)}
                                    </p>
                                    <p>
                                        <strong>Páginas:</strong> {livroSelecionado?.paginas || 'Não disponível'}
                                    </p>
                                </Box>
                            </Box>
                        </Card>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button onClick={deleteLivro} sx={{ '&:hover': { backgroundColor: 'red', } }}>
                                <Box sx={{ mixBlendMode: 'difference' }}>
                                    Deletar livro
                                </Box>
                            </Button>
                            <Button onClick={() => setModalOpen(false)} sx={{ mixBlendMode: 'difference' }}>
                                <Box sx={{ mixBlendMode: 'difference' }}>
                                    Fechar
                                </Box>
                            </Button>
                        </Box>

                    </Box>
                </Modal>
            </Box>
        </>
    );
}
