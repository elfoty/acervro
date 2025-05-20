export const getAllLivrosSchema = {
  description: 'Listar todos os livros',
  tags: ['Livro'],
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idLivro: { type: 'number' },
          nome: { type: 'string' },
          ISBN: { type: 'string' },
          paginas: { type: 'number' },
          lancamento: { type: 'string', format: 'date-time' },
          autores: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                nome: { type: 'string' },
                nascimento: { type: 'string', format: 'date-time' },
                bio: { type: 'string' }
              }
            }
          },
          categorias: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                nome: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }
}

export const getLivroSchema = {
  description: 'Buscar livro por ID',
  tags: ['Livro'],
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
        idLivro: { type: 'number' },
        nome: { type: 'string' },
        ISBN: { type: 'string' },
        paginas: { type: 'number' },
        lancamento: { type: 'string', format: 'date-time' },
        autores: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' },
              nascimento: { type: 'string', format: 'date-time' },
              bio: { type: 'string' }
            }
          }
        },
        categorias: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' }
            }
          }
        }
      }
    }
  }
}

export const createLivroSchema = {
  description: 'Criar novo livro',
  tags: ['Livro'],
  body: {
    type: 'object',
    required: ['nome', 'ISBN', 'paginas', 'lancamento', 'autorIds', 'categoriaIds'],
    properties: {
      nome: { type: 'string' },
      ISBN: { type: 'string' },
      paginas: { type: 'number' },
      lancamento: { type: 'string', format: 'date-time' },
      autorIds: { type: 'array', items: { type: 'number' } }, // Body ainda usa IDs
      categoriaIds: { type: 'array', items: { type: 'number' } }
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        idLivro: { type: 'number' },
        nome: { type: 'string' },
        ISBN: { type: 'string' },
        paginas: { type: 'number' },
        lancamento: { type: 'string', format: 'date-time' },
        autores: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' },
              nascimento: { type: 'string', format: 'date-time' },
              bio: { type: 'string' }
            }
          }
        },
        categorias: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' }
            }
          }
        }
      }
    }
  }
}

export const deleteLivroSchema = {
  description: 'Deletar livro por ID',
  tags: ['Livro'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  }
}

export const editLivroSchema = {
  description: 'Atualizar livro por ID',
  tags: ['Livro'],
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
      ISBN: { type: 'string' },
      paginas: { type: 'number' },
      lancamento: { type: 'string', format: 'date-time' },
      autorIds: { type: 'array', items: { type: 'number' } }, // Body usa IDs para atualização
      categoriaIds: { type: 'array', items: { type: 'number' } }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        idLivro: { type: 'number' },
        nome: { type: 'string' },
        ISBN: { type: 'string' },
        paginas: { type: 'number' },
        lancamento: { type: 'string', format: 'date-time' },
        autores: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' },
              nascimento: { type: 'string', format: 'date-time' },
              bio: { type: 'string' }
            }
          }
        },
        categorias: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' }
            }
          }
        }
      }
    }
  }
}