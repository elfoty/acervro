import { useContext, useEffect, useState } from 'react';
import {
    Box, Typography, CircularProgress, Alert, Card, CardContent, CardHeader, Container,
    Modal,
    Button,
    TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from '../api/axios';
import Header from '../components/Header';
import { FaPlus } from 'react-icons/fa';
import { ImagemComFallback } from '../components/ImagemComFallback';
import semCapa from '../assets/capaind.png';

interface Acervro {
    id: number;
    nome: string;
    usuarioId: number;
    livros: {
        livroId: number;
        acervroId: number;
        livro: Livro;
    }[];
}

interface Livro {

    id: number
    nome: string
    ISBN: string
    paginas: number
    lancamento: string // ISO format string
    autorIds: number[]
    categoriaIds: number[]
    capa?: string // URL da imagem da capa (opcional)
}

export default function Acervros() {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [novoAcervo, setNovoAcervo] = useState<boolean>(false);
    const [acervroSelecionado, setAcervroSelecionado] = useState<Acervro | null>();
    const [acervros, setAcervros] = useState<Acervro[]>([]);
    const [livrosSelecionados, setLivrosSelecionados] = useState<Livro[]>([]);
    const [nome, setNome] = useState<string>('');
    const [usuario, setUsuario] = useState<any>(null);
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        const carregarAcervro = async () => {
            try {
                const usuario = await axios.get('/me');
                const response = await axios.get(`/acervros/${usuario.data.user.id}`);
                setAcervros(response.data);
            } catch (err) {
                setErro('Erro ao carregar acervros');
            } finally {
                setCarregando(false);
            }
        };
        carregarAcervro();
    }, []);

    const openAcervro = (event: Acervro | null) => {
        const carregarLivros = async () => {
            try {
                const usuario = await axios.get('/me');
                setUsuario(usuario.data.user);
                const response = await axios.get('/livros/' + usuario.data.user.id);
                setLivros(response.data);
                if (event) {
                    setAcervroSelecionado(event);
                    let livrosAux: Livro[] = [];
                    event.livros.forEach(livro => {
                        livrosAux.push(livro.livro);
                    })
                    setLivrosSelecionados(livrosAux);
                    setNome(event.nome);
                }
            } catch (err: any) {
                setModalOpen(false);
                setAcervroSelecionado(null);
                setLivrosSelecionados([]);
                setErro('Erro ao carregar os Acervros');
            } finally {
                setCarregando(false);
            }
        };
        if (event)
            setEdit(true);
        else
            setEdit(false)
        carregarLivros();
        setModalOpen(true);
        setNovoAcervo(true);
    };

    const handleSelect = (livro: any) => {
        const jaSelecionado = livrosSelecionados.some((l) => l.id === livro.id);
        if (jaSelecionado) {
            setLivrosSelecionados(prev => prev.filter(l => l.id !== livro.id)); // remove
        } else {
            setLivrosSelecionados(prev => [...prev, livro]); // adiciona
        }
    }

    const addAcervro = async () => {
        try {
            if (edit) {
                await axios.put('/edit-acervro', {
                    id: acervroSelecionado?.id,
                    nome: nome,
                    usuarioId: usuario.id,
                    livros: livrosSelecionados
                })
            } else {
                await axios.post('/acervro', {
                    nome: nome,
                    usuarioId: usuario.id,
                    livros: livrosSelecionados
                });
            }
            setModalOpen(false)
            window.location.reload()
        } catch (err) {
            setErro('Erro ao adicionar os Acervros: ' + err);
        }

    }

    const deleteAcervro = async () => {
        try {
            if (edit && acervroSelecionado) {
                await axios.delete('/acervro/' + acervroSelecionado.id)
            }
            window.location.reload()
        } catch (erro) {
            setErro('Erro ao deletar acervro.')
        }

    }

    return (
        <>
            <Header />
            <Box maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    Meus Acervros
                </Typography>
                {((acervros.length == 0) ?
                    <Alert severity="info" variant='outlined' sx={{ marginBottom: '10px', mixBlendMode: 'overlay', borderColor: '#fff', color: '#fff', '& .MuiSvgIcon-root ': { fill: '#fff' } }}>
                        Você ainda não possui livros, pesquise por um e adicione.
                    </Alert> : ''
                )}

                {carregando ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : erro ? (
                    <Alert severity="error" variant='outlined' sx={{ marginBottom: '10px', mixBlendMode: 'overlay', borderColor: '#fff', color: '#fff', '& .MuiSvgIcon-root ': { fill: '#fff' } }}>{erro}</Alert>
                ) : (
                    <Grid container spacing={3}  >

                    </Grid>
                )}
                <Button onClick={(event) => openAcervro(null)} sx={{
                    width: '100%', backgroundColor: '#b98fe0', color: '#fff', height: '40px', ':hover': {
                        mixBlendMode: 'overlay',
                    }
                }}><FaPlus /></Button>
                <Grid container spacing={1} sx={{ mt: 3 }}>
                    {acervros.map((acervro, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                            <Button
                                fullWidth
                                onClick={(e) => { openAcervro(acervro) }}
                                sx={{
                                    height: 50,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    p: 1,
                                    border: '1px solid #fff',
                                    mixBlendMode: 'overlay'
                                }}

                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontStyle: 'italic',
                                        fontSize: 12,
                                        lineHeight: 1.2,
                                        height: '2.4em',
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        textAlign: 'center',
                                        alignContent: 'center',
                                        mixBlendMode: 'overlay',
                                        color: '#fff'
                                    }}
                                >
                                    {acervro.nome}
                                </Typography>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
                <Modal open={modalOpen} onClose={() => { setModalOpen(false), setNome(''), setLivrosSelecionados([]) }}>
                    <Box sx={{ padding: '0px 32px', bgcolor: 'background.paper', m: 'auto', mt: 10, width: 800, borderRadius: 3, height: 550, overflowY: 'hidden' }}>
                        <h2 style={{ textAlign: 'center', marginTop: 0 }}>{novoAcervo ? 'Novo acervro' : ''}</h2>
                        <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 1, bgcolor: '#f9f9f9', height: '420px' }}>
                            <TextField
                                label="Nome do acervro"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}

                                sx={{
                                    '& .MuiInputBase-input': { // Cor do texto digitado
                                        color: '#a3a3a3', // Branco
                                    },
                                    '& .MuiInputLabel-root': { // Cor do label
                                        color: '#a3a3a3', // Cinza claro
                                    },
                                    '& .MuiOutlinedInput-root': { // Cor da borda
                                        '& fieldset': {
                                            borderColor: '#a3a3a3', // Cinza
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#a3a3a3', // Branco ao passar o mouse
                                        },
                                    },
                                    margin: '10px 20px',
                                    width: '-webkit-fill-available'
                                }}
                            />

                            <small style={{ margin: '10px 20px', color: '#303030' }}>Selecione dentre seus livros:</small>

                            <Box sx={{
                                margin: '0px 20px',
                                maxHeight: '300px', // ou algo que caiba dentro de 420px menos o espaço ocupado pelo TextField e small
                                overflowY: 'auto',
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#888',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    backgroundColor: '#555',
                                },
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#888 transparent',
                            }}>
                                <Box>
                                    <Grid container spacing={1}>
                                        {livros.map((livro, index) => (
                                            <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    onClick={() => { handleSelect(livro) }}
                                                    sx={{
                                                        height: 140,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        textAlign: 'center',
                                                        color: '#303030',
                                                        overflow: 'hidden',
                                                        p: 1,
                                                        border: livrosSelecionados.some(l => l.id === livro.id)
                                                            ? '2px solid #a3a3a3'
                                                            : '1px solid #c3c3c3',
                                                        backgroundColor: livrosSelecionados.some(l => l.id === livro.id)
                                                            ? '#f3e5f5'
                                                            : 'transparent',
                                                        fontWeight: livrosSelecionados.some(l => l.id === livro.id)
                                                            ? 'bold'
                                                            : 'normal',
                                                    }}

                                                >
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontStyle: 'italic',
                                                            fontSize: 10,
                                                            lineHeight: 1.2,
                                                            height: '2.4em',
                                                            overflow: 'hidden',
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            textAlign: 'center',
                                                            alignContent: 'center'
                                                        }}
                                                    >
                                                        {livro.nome}
                                                    </Typography>
                                                    <ImagemComFallback
                                                        src={livro?.capa}
                                                        fallbackSrc={semCapa}
                                                        alt={livro.nome}
                                                        style={{ width: 60, objectFit: 'contain', marginTop: 5 }}
                                                    />
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Grid>

                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            {edit && <Button onClick={deleteAcervro} sx={{ '&:hover': { backgroundColor: 'red', } }}>
                                <Box sx={{ mixBlendMode: 'difference' }}>
                                    Deletar livro
                                </Box>
                            </Button>}
                            <Button onClick={addAcervro} sx={{ '&:hover': { backgroundColor: 'lightgreen', } }}>
                                <Box sx={{ mixBlendMode: 'difference' }}>
                                    {edit ? 'Editar acervro' : 'Adicionar acervro'}
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
