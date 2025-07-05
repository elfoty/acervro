import { FastifyPluginAsync } from 'fastify'
import {
    getLivro,
    getAllLivros,
    createLivro,
    deleteLivro,
    editLivro,
    searchBooks,
} from '../controller/livro.controller.js'

import {
    createLivroSchema,
    deleteLivroSchema,
    editLivroSchema,   
    getAllLivrosSchema,
    getLivroSchema,
    searchBooksSchema,
} from '../schemas/livro.schema.js'

const livroRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/livros/:id', {
        schema: getAllLivrosSchema,
        handler: getAllLivros
    })

    fastify.get('/livros/search', {
        schema: searchBooksSchema,
        handler: searchBooks
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