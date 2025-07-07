import { FastifyRequest, FastifyReply } from 'fastify'
import * as livroRepo from '../repository/livro.repository.js'
import * as autorRepo from '../repository/autor.repository.js'

interface getLivroParams {
    id: string
}

interface CreateLivroBody {
    nome: string
    ISBN: string
    paginas: number
    lancamento: string // ISO format string
    autores: string[]
    categorias: string[]
    usuarioId: number
    descricao: string
    capa: string // URL or path to the book cover image
}

interface CreateAcervroBody {
    id: number
    nome: string
    usuarioId: number
    livros: [{
        id: number
        nome: string
        ISBN: string
        paginas: number
        lancamento: string
        autores: string[]
        categorias: string[]
        usuarioId: number
        descricao: string
        capa: string
    }]
}

interface SearchBooksQuery {
    q: string;
    maxResults?: number;
    searchType?: 'general' | 'isbn';
}

export async function getAllLivros(
    request: FastifyRequest<{ Params: getLivroParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params
        const livros = await livroRepo.getAllLivros(Number(id));

        // Formate os dados para incluir arrays de autores e categorias
        const livrosFormatados = livros.map(livro => ({
            ...livro,
            autores: livro.autores.map(la => la.autor), // Extrai apenas os autores
            categorias: livro.categoria.map(lc => lc.categoria), // Extrai apenas as categorias
            usuario: {
                idUsuario: livro.usuarioId // Inclui o ID do usuário
            }
        }));

        return livrosFormatados;
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao buscar livros' });
    }
}

export async function getLivro(
    request: FastifyRequest<{ Params: getLivroParams }>,
    reply: FastifyReply) {
    const { id } = request.params
    const livro = await livroRepo.getLivroById(Number(id))
    if (!livro) {
        reply.code(404).send({ error: 'Livro não encontrado' })
        return
    }
    return livro
}

export async function createLivro(
    request: FastifyRequest<{ Body: CreateLivroBody }>,
    reply: FastifyReply
) {
    try {
        const {
            nome,
            ISBN,
            paginas,
            lancamento,
            autores,
            categorias,
            descricao,
            capa
        } = request.body

        const autorIds: number[] = [];
        const categoriaIds: number[] = [];

        // Verifica e cria categorias
        for (const nomeCategoria of categorias) {
            let categoria = await livroRepo.findCategoriaByName(nomeCategoria);
            if (!categoria) {
                categoria = await livroRepo.createCategoria({ nome: nomeCategoria });
            }
            categoriaIds.push(categoria.id);
        }

        for (const nomeAutor of autores) {
            let autor = await autorRepo.findByName({ nome: nomeAutor });
            if (!autor) {
                autor = await autorRepo.createAutor({ nome: nomeAutor });
            }
            autorIds.push(autor.id);
        }

        const livro = await livroRepo.createLivro({
            nome,
            ISBN,
            paginas,
            lancamento: new Date(lancamento),
            autorIds,
            categoriaIds,
            usuarioId: request.body.usuarioId, // Inclui o ID do usuário se necessário,
            descricao,
            capa // Inclui a URL ou caminho da capa do livro
        })

        reply.code(201).send(livro)
    } catch (error) {
        console.error('Erro ao criar livro:', error)
        reply.code(500).send({ error: 'Erro ao criar o livro' })
    }
}

interface EditLivroParams {
    id: string
}

interface EditLivroBody {
    nome?: string
    ISBN?: string
    paginas?: number
    lancamento?: string
    autorIds?: number[]
    categoriaIds?: number[]
}

export async function editLivro(
    request: FastifyRequest<{ Params: EditLivroParams; Body: EditLivroBody }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const livroId = Number(id)

    const livroExistente = await livroRepo.getLivroById(livroId)
    if (!livroExistente) {
        reply.code(404).send({ error: 'Livro não encontrado' })
        return
    }

    try {
        const {
            nome,
            ISBN,
            paginas,
            lancamento,
            autorIds,
            categoriaIds
        } = request.body

        const livroAtualizado = await livroRepo.updateLivro(
            livroId,
            {
                nome,
                ISBN,
                paginas,
                lancamento: lancamento ? new Date(lancamento) : undefined,
                autorIds,
                categoriaIds,
            }
        )

        return livroAtualizado
    } catch (error) {
        console.error('Erro ao atualizar livro:', error)
        reply.code(500).send({ error: 'Erro ao atualizar o livro' })
    }
}

interface DeleteLivroParams {
    id: string
}

export async function deleteLivro(
    request: FastifyRequest<{ Params: DeleteLivroParams }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const livroId = Number(id)

    const livro = await livroRepo.getLivroById(livroId)
    if (!livro) {
        reply.code(404).send({ error: 'Livro não encontrado' })
        return
    }

    try {
        await livroRepo.deleteLivro(livroId)
        reply.code(204).send()
    } catch (error) {
        console.error('Erro ao deletar livro:', error)
        reply.code(500).send({ error: 'Erro ao deletar o livro' })
    }
}

export async function searchBooks(
    request: FastifyRequest<{ Querystring: { q: string; maxResults?: number; searchType?: 'general' | 'isbn' } }>,
    reply: FastifyReply
) {
    try {
        const { q, maxResults = 5, searchType = 'general' } = request.query;
        const livros = await livroRepo.searchBooks(q, maxResults, searchType);
        return livros;
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao buscar livros' });
    }
}

export async function getAcervros(
    request: FastifyRequest<{ Params: getLivroParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params;
        const acervros = await livroRepo.getAcervros(Number(id));

        // Formate os dados para o frontend
        const acervrosFormatados = acervros.map(acervro => ({
            id: acervro.id,
            nome: acervro.nome,
            usuarioId: acervro.usuarioId,
            livros: acervro.livros.map(item => ({
                livroId: item.livro.id,
                acervroId: item.acervroId,
                livro: {
                    ...item.livro,
                    autores: item.livro.autores?.map(la => la.autor) || [],
                    categorias: item.livro.categoria?.map(lc => lc.categoria) || [],
                }
            }))
        }));

        return acervrosFormatados;
    } catch (error) {
        console.error('Erro ao buscar acervros:', error);
        reply.code(500).send({ error: 'Erro ao buscar acervros' });
    }
}

export async function createAcervro(
    request: FastifyRequest<{ Body: CreateAcervroBody }>,
    reply: FastifyReply
) {
    try {
        const acervro = await livroRepo.createAcervro(request.body);

        return reply.code(201).send(acervro);
    } catch (error) {
        console.error('Erro ao criar acervro:', error);
        return reply.code(500).send({ error: 'Erro ao adicionar acervro' });
    }
}

export async function editAcervro(
    request: FastifyRequest<{ Body: CreateAcervroBody }>,
    reply: FastifyReply
) {
    try {
        console.log(request.body);
        const acervro = await livroRepo.editAcervro(request.body);

        return reply.code(201).send(acervro);
    } catch (error) {
        console.error('Erro ao criar acervro:', error);
        return reply.code(500).send({ error: 'Erro ao adicionar acervro' });
    }
}

export async function deleteAcervro(
    request: FastifyRequest<{ Params: DeleteLivroParams }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const acervroId = Number(id)

    const acervro = await livroRepo.getAcervroById(acervroId)
    if (!acervro) {
        reply.code(404).send({ error: 'Livro não encontrado' })
        return
    }

    try {
        await livroRepo.deleteAcervro(acervroId)
        reply.code(204).send()
    } catch (error) {
        console.error('Erro ao deletar livro:', error)
        reply.code(500).send({ error: 'Erro ao deletar o livro' })
    }
}


