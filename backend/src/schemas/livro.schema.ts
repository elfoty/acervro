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
          },
          usuarioId: { type: 'number' }, // ➕ incluído na resposta

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

export const searchBooksSchema = {
  description: 'Buscar livros via Google Books API',
  tags: ['Livro'],
  querystring: {
    type: 'object',
    properties: {
      q: { type: 'string' },
      maxResults: { type: 'number', minimum: 1, maximum: 40, default: 5 },
      searchType: { type: 'string', enum: ['general', 'isbn'], default: 'general' }
    },
    required: ['q']
  },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          volumeInfo: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              authors: {
                type: 'array',
                items: { type: 'string' },
                nullable: true
              },
              publishedDate: { type: 'string', nullable: true },
              pageCount: { type: 'number', nullable: true },
              industryIdentifiers: {
                type: 'array',
                nullable: true,
                items: {
                  type: 'object',
                  properties: {
                    type: { type: 'string' },
                    identifier: { type: 'string' }
                  },
                  required: ['type', 'identifier']
                }
              },
              description: { type: 'string', nullable: true },
              imageLinks: {
                type: 'object',
                nullable: true,
                properties: {
                  thumbnail: { type: 'string', nullable: true }
                }
              }
            },
            required: ['title']
          }
        },
        required: ['id']
      }
    }
  }
}
