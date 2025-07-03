export const getAllAutoresSchema = {
    description: 'Listar todos os autores',
    tags: ['Autor'],
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idAutor: { type: 'number' },
                    nome: { type: 'string' },
                    nascimento: { type: 'string', format: 'date-time' },
                    bio: { type: 'string' }
                }
            }
        }
    }
}

export const getAutorSchema = {
    description: 'Buscar autor por ID',
    tags: ['Autor'],
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
                idAutor: { type: 'number' },
                nome: { type: 'string' },
                nascimento: { type: 'string', format: 'date-time' },
                bio: { type: 'string' }
            }
        }
    }
}

export const createAutorSchema = {
    description: 'Criar novo autor',
    tags: ['Autor'],
    body: {
        type: 'object',
        required: ['nome', 'nascimento', 'bio'],
        properties: {
            nome: { type: 'string' },
            nascimento: { type: 'string', format: 'date-time' },
            bio: { type: 'string' }
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                idAutor: { type: 'number' },
                nome: { type: 'string' },
                nascimento: { type: 'string', format: 'date-time' },
                bio: { type: 'string' }
            }
        }
    }
}

export const deleteAutorSchema = {
    description: 'Deletar autor por ID',
    tags: ['Autor'],
    params: {
        type: 'object',
        properties: {
            id: { type: 'number' }
        }
    }
}

export const updateAutorSchema = {
    description: 'Atualizar autor por ID',
    tags: ['Autor'],
    params: {
        type: 'object',
        properties: {
            id: { type: 'number' }
        }
    },
    body: {
        type: 'object',
        properties: {
            nome: { type: 'string' },
            nascimento: { type: 'string', format: 'date-time' },
            bio: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                idAutor: { type: 'number' },
                nome: { type: 'string' },
                nascimento: { type: 'string', format: 'date-time' },
                bio: { type: 'string' }
            }
        }
    }
}