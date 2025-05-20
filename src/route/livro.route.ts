import { FastifyPluginAsync } from 'fastify'
import {
    getLivro,
    getAllLivros,
    createLivro,
    deleteLivro,
    editLivro,
} from '../controller/livro.controller.js'

import {
    createLivroSchema,
    deleteLivroSchema,
    editLivroSchema,   
    getAllLivrosSchema,
    getLivroSchema,
} from '../schemas/livro.schema.js'

const livroRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/livros', {
        schema: getAllLivrosSchema,
        handler: getAllLivros
    })

    fastify.get('/livro/:id', {
        schema: getLivroSchema,
        handler: getLivro
    })

    fastify.post('/livros', {
        schema: createLivroSchema,
        handler: createLivro
    })

    fastify.put('/livro/:id', {
        schema: editLivroSchema,
        handler: editLivro
    })

    fastify.delete('/livro/:id', {
        schema: deleteLivroSchema,
        handler: deleteLivro
    })
}

export default livroRoutes