import { FastifyPluginAsync } from 'fastify'
import {
    createCategoria,
    deleteCategoria,
    updateCategoria,
    getAllCategorias,
    getCategoria,
} from '../controller/categoria.controller.js'

import { 
    createCategoriaSchema, 
    getAllCategoriasSchema, 
    getCategoriaSchema,
    deleteCategoriaSchema, 
    updateCategoriaSchema 
} from '../schemas/categoria.schema.js'

const categoriaRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/categorias', {
        schema: getAllCategoriasSchema,
        handler: getAllCategorias
    })

    fastify.get('/categoria/:id', {
        schema: getCategoriaSchema,
        handler: getCategoria
    })

    fastify.post('/categorias', {
        schema: createCategoriaSchema,
        handler: createCategoria
    })

    fastify.put('/categoria/:id', {
        schema: updateCategoriaSchema,
        handler: updateCategoria
    })

    fastify.delete('/categoria/:id', {
        schema: deleteCategoriaSchema,
        handler: deleteCategoria
    })
}

export default categoriaRoutes