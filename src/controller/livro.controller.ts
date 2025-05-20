import { FastifyRequest, FastifyReply } from 'fastify'
import * as livroRepo from '../repository/livro.repository.js'

interface getLivroParams {
    id: string
}

interface CreateLivroBody {
    nome: string
    ISBN: string
    paginas: number
    lancamento: string // ISO format string
    autorIds: number[]
    categoriaIds: number[]
}

export async function getAllLivros(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const livros = await livroRepo.getAllLivros();

        // Formate os dados para incluir arrays de autores e categorias
        const livrosFormatados = livros.map(livro => ({
            ...livro,
            autores: livro.autores.map(la => la.autor), // Extrai apenas os autores
            categorias: livro.categoria.map(lc => lc.categoria) // Extrai apenas as categorias
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
            autorIds,
            categoriaIds,
        } = request.body

        const livro = await livroRepo.createLivro({
            nome,
            ISBN,
            paginas,
            lancamento: new Date(lancamento),
            autorIds,
            categoriaIds,
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
