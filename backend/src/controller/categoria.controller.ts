import { FastifyRequest, FastifyReply } from 'fastify'
import * as categoriaRepo from '../repository/categoria.repository.js'

interface CreateCategoriaBody {
    nome: string
}

interface CategoriaParams {
    id: string
}

export async function getAllCategorias(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const categorias = await categoriaRepo.getAllCategorias()
    return categorias
}

export async function getCategoria(
    request: FastifyRequest<{ Params: CategoriaParams }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const categoria = await categoriaRepo.getCategoriaById(Number(id))
    if (!categoria) {
        reply.code(404).send({ error: 'Categoria não encontrada' })
        return
    }
    return categoria
}

export async function createCategoria(
    request: FastifyRequest<{ Body: CreateCategoriaBody }>,
    reply: FastifyReply
) {
    try {
        const { nome } = request.body
        const novaCategoria = await categoriaRepo.createCategoria({ nome })
        reply.code(201).send(novaCategoria)
    } catch (error) {
        console.error('Erro ao criar categoria:', error)
        reply.code(500).send({ error: 'Erro ao criar categoria' })
    }
}

export async function deleteCategoria(
    request: FastifyRequest<{ Params: CategoriaParams }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const categoria = await categoriaRepo.getCategoriaById(Number(id))

    if (!categoria) {
        reply.code(404).send({ error: 'Categoria não encontrada' })
        return
    }

    try {
        await categoriaRepo.deleteCategoria(Number(id))
        reply.code(204).send() // No Content
    } catch (error) {
        console.error('Erro ao deletar categoria:', error)
        reply.code(500).send({ error: 'Erro ao deletar categoria' })
    }
}

export async function updateCategoria(
    request: FastifyRequest<{ Params: CategoriaParams; Body: CreateCategoriaBody }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const { nome } = request.body

    try {
        const categoria = await categoriaRepo.getCategoriaById(Number(id))
        if (!categoria) {
            reply.code(404).send({ error: 'Categoria não encontrada' })
            return
        }

        const categoriaAtualizada = await categoriaRepo.updateCategoria(
            Number(id),
            { nome }
        )

        return categoriaAtualizada
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error)
        reply.code(500).send({ error: 'Erro ao atualizar categoria' })
    }
}