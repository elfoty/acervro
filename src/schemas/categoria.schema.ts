export const getAllCategoriasSchema = {
    description: 'Listar todas as categorias',
    tags: ['Categoria'],
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idCategoria: { type: 'number' },
                    nome: { type: 'string' }
                }
            }
        }
    }
}

export const getCategoriaSchema = {
    description: 'Buscar categoria por ID',
    tags: ['Categoria'],
    params: {
        type: 'object',
        properties: {
            id: { type: 'number' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                idCategoria: { type: 'number' },
                nome: { type: 'string' }
            }
        }
    }
}

export const createCategoriaSchema = {
    description: 'Criar nova categoria',
    tags: ['Categoria'],
    body: {
        type: 'object',
        required: ['nome'],
        properties: {
            nome: { type: 'string' }
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                idCategoria: { type: 'number' },
                nome: { type: 'string' }
            }
        }
    }
}

export const deleteCategoriaSchema = {
    description: 'Deletar categoria por ID',
    tags: ['Categoria'],
    params: {
        type: 'object',
        properties: {
            id: { type: 'number' }
        }
    }
}

export const updateCategoriaSchema = {
    description: 'Atualizar categoria por ID',
    tags: ['Categoria'],
    params: {
        type: 'object',
        properties: {
            id: { type: 'number' }
        }
    },
    body: {
        type: 'object',
        required: ['nome'],
        properties: {
            nome: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                idCategoria: { type: 'number' },
                nome: { type: 'string' }
            }
        }
    }
}