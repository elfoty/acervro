import { FastifyPluginAsync } from 'fastify'
import {
    createAutor,
    deleteAutor,
    updateAutor,
    getAllAutores,
    getAutor,
} from '../controller/autor.controller.js'

import { 
    createAutorSchema,
    deleteAutorSchema,
    updateAutorSchema,
    getAllAutoresSchema,
    getAutorSchema,
} from '../schemas/autor.schema.js'

const autorRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/autores', {
        schema: getAllAutoresSchema,
        handler: getAllAutores
    })

    fastify.get('/autor/:id', {
        schema: getAutorSchema,
        handler: getAutor
    })

    fastify.post('/autor', {
        schema: createAutorSchema,
        handler: createAutor
    })

    fastify.put('/autor/:id', {
        schema: updateAutorSchema,
        handler: updateAutor
    })

    fastify.delete('/autor/:id', {
        schema: deleteAutorSchema,
        handler: deleteAutor
    })
}

export default autorRoutes