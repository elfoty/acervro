import { FastifyRequest, FastifyReply } from 'fastify'
import * as autorRepo from '../repository/autor.repository.js'

interface CreateAutorBody {
    nome: string
    nascimento: Date
    bio: string
}

interface AutorParams {
    id: string
}

export async function getAllAutores(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const autores = await autorRepo.getAllAutores()
    return autores
}

export async function getAutor(
    request: FastifyRequest<{ Params: AutorParams }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const autor = await autorRepo.getAutorById(Number(id))
    if (!autor) {
        reply.code(404).send({ error: 'Autor não encontrado' })
        return
    }
    return autor
}

export async function createAutor(
    request: FastifyRequest<{ Body: CreateAutorBody }>,
    reply: FastifyReply
) {
    try {
        const { nome, nascimento, bio } = request.body
        const novoAutor = await autorRepo.createAutor({ nome, nascimento, bio })
        reply.code(201).send(novoAutor)
    } catch (error) {
        console.error('Erro ao criar autor:', error)
        reply.code(500).send({ error: 'Erro ao criar autor' })
    }
}

export async function deleteAutor(
    request: FastifyRequest<{ Params: AutorParams }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const autor = await autorRepo.getAutorById(Number(id))

    if (!autor) {
        reply.code(404).send({ error: 'Autor não encontrado' })
        return
    }

    try {
        await autorRepo.deleteAutor(Number(id))
        reply.code(204).send()
    } catch (error) {
        console.error('Erro ao deletar autor:', error)
        reply.code(500).send({ error: 'Erro ao deletar autor' })
    }
}

export async function updateAutor(
    request: FastifyRequest<{ Params: AutorParams; Body: CreateAutorBody }>,
    reply: FastifyReply
) {
    const { id } = request.params
    const { nome, nascimento, bio } = request.body

    try {
        const autor = await autorRepo.getAutorById(Number(id))
        if (!autor) {
            reply.code(404).send({ error: 'Autor não encontrado' })
            return
        }

        const autorAtualizado = await autorRepo.updateAutor(
            Number(id),
            { nome, nascimento, bio }
        )

        return autorAtualizado
    } catch (error) {
        console.error('Erro ao atualizar autor:', error)
        reply.code(500).send({ error: 'Erro ao atualizar autor' })
    }
}