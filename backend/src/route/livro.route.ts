import { FastifyPluginAsync } from 'fastify'
import {
    getLivro,
    getAllLivros,
    createLivro,
    deleteLivro,
    editLivro,
    searchBooks,
    createAcervro,
    getAcervros,
    editAcervro,
    deleteAcervro,
} from '../controller/livro.controller.js'

import {
    createAcervroSchema,
    createLivroSchema,
    deleteAcervroSchema,
    deleteLivroSchema,
    editLivroSchema,   
    getAcervrosSchema,   
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

    fastify.post('/acervro', {
        schema: createAcervroSchema,
        handler: createAcervro
    })

    fastify.get('/acervros/:id', {
        schema: getAcervrosSchema,
        handler: getAcervros
    })

    fastify.put('/edit-acervro', {
        schema: createAcervroSchema,
        handler: editAcervro
    })
    fastify.delete('/acervro/:id', {
        schema: deleteAcervroSchema,
        handler: deleteAcervro
    })
}

export default livroRoutes