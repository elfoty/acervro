export const getAllLivrosSchema = {
  description: 'Listar todos os livros',
  tags: ['Livro'],
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          nome: { type: 'string' },
          ISBN: { type: 'string' },
          paginas: { type: 'number' },
          lancamento: { type: 'string', format: 'date-time' },
          descricao: { type: 'string' },
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
          usuarioId: { type: 'number' },
          capa: { type: 'string', nullable: true }
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
        id: { type: 'number' },
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
    required: ['nome', 'ISBN', 'paginas', 'lancamento', 'autores', 'categorias'],
    properties: {
      nome: { type: 'string' },
      ISBN: { type: 'string' },
      paginas: { type: 'number' },
      lancamento: { type: 'string' }, // se vier só o ano ou string sem hora
      autores: { type: 'array', items: { type: 'string' } }, // nomes dos autores
      categorias: { type: 'array', items: { type: 'string' } }, // nomes das categorias
      descricao: { type: 'string' },
      capa: { type: 'string' }, // URL ou caminho da capa do livro
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        nome: { type: 'string' },
        ISBN: { type: 'string' },
        paginas: { type: 'number' },
        lancamento: { type: 'string' },
        capa: { type: 'string' },
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
        id: { type: 'number' },
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
          kind: { type: 'string' },
          id: { type: 'string' },
          etag: { type: 'string' },
          selfLink: { type: 'string' },
          volumeInfo: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              subtitle: { type: 'string', nullable: true },
              authors: {
                type: 'array',
                items: { type: 'string' },
                nullable: true
              },
              publisher: { type: 'string', nullable: true },
              publishedDate: { type: 'string', nullable: true },
              description: { type: 'string', nullable: true },
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
              pageCount: { type: 'integer', nullable: true },
              dimensions: {
                type: 'object',
                nullable: true,
                properties: {
                  height: { type: 'string', nullable: true },
                  width: { type: 'string', nullable: true },
                  thickness: { type: 'string', nullable: true }
                }
              },
              printType: { type: 'string', nullable: true },
              mainCategory: { type: 'string', nullable: true },
              categories: {
                type: 'array',
                items: { type: 'string' },
                nullable: true
              },
              averageRating: { type: 'number', nullable: true },
              ratingsCount: { type: 'integer', nullable: true },
              contentVersion: { type: 'string', nullable: true },
              imageLinks: {
                type: 'object',
                nullable: true,
                properties: {
                  smallThumbnail: { type: 'string', nullable: true },
                  thumbnail: { type: 'string', nullable: true },
                  small: { type: 'string', nullable: true },
                  medium: { type: 'string', nullable: true },
                  large: { type: 'string', nullable: true },
                  extraLarge: { type: 'string', nullable: true }
                }
              },
              language: { type: 'string', nullable: true },
              previewLink: { type: 'string', nullable: true },
              infoLink: { type: 'string', nullable: true },
              canonicalVolumeLink: { type: 'string', nullable: true }
            },
            required: ['title']
          }
        },
        required: ['id', 'volumeInfo']
      }
    }
  }
}

export const getAcervrosSchema = {
  description: 'Listar acervros do usuário',
  tags: ['Acervro'],
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          nome: { type: 'string' },
          usuarioId: { type: 'number' },
          livros: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                livroId: { type: 'number' },
                acervroId: { type: 'number' },
                livro: {
                  type: 'object',
                  properties: {
                    id: { type: 'number' },
                    nome: { type: 'string' },
                    ISBN: { type: 'string' },
                    autores: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'number' },
                          nome: { type: 'string' }
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
        }
      }
    }
  }
};


export const createAcervroSchema = {
  description: 'Criar novo acervro',
  tags: ['Acervro'],
  body: {
    type: 'object',
    required: ['nome', 'livros', 'usuarioId'],
    properties: {
      nome: { type: 'string' },
      usuarioId: { type: 'number' },
      livros: {
        type: 'array',
        items: {
          type: 'object',
          required: ['id'], // para associar só o id é necessário
          properties: {
            id: { type: 'number' },
            nome: { type: 'string' },
            ISBN: { type: 'string' },
            paginas: { type: 'number' },
            lancamento: { type: 'string', format: 'date-time' },
            descricao: { type: 'string' },
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
            usuarioId: { type: 'number' },
            capa: { type: 'string', nullable: true }
          }
        }
      }
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        nome: { type: 'string' },
        usuarioId: { type: 'number' },
        livros: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' },
              ISBN: { type: 'string' },
              paginas: { type: 'number' },
              lancamento: { type: 'string', format: 'date-time' },
              descricao: { type: 'string' },
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
              usuarioId: { type: 'number' },
              capa: { type: 'string', nullable: true }
            }
          }
        }
      }
    }
  }
}

export const editAcervroSchema = {
  description: 'Editar novo acervro',
  tags: ['Acervro'],
  body: {
    type: 'object',
    required: ['nome', 'livros', 'usuarioId'],
    properties: {
      id: {type: 'number'},
      nome: { type: 'string' },
      usuarioId: { type: 'number' },
      livros: {
        type: 'array',
        items: {
          type: 'object',
          required: ['id'], // para associar só o id é necessário
          properties: {
            id: { type: 'number' },
            nome: { type: 'string' },
            ISBN: { type: 'string' },
            paginas: { type: 'number' },
            lancamento: { type: 'string', format: 'date-time' },
            descricao: { type: 'string' },
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
            usuarioId: { type: 'number' },
            capa: { type: 'string', nullable: true }
          }
        }
      }
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        nome: { type: 'string' },
        usuarioId: { type: 'number' },
        livros: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nome: { type: 'string' },
              ISBN: { type: 'string' },
              paginas: { type: 'number' },
              lancamento: { type: 'string', format: 'date-time' },
              descricao: { type: 'string' },
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
              usuarioId: { type: 'number' },
              capa: { type: 'string', nullable: true }
            }
          }
        }
      }
    }
  }
}

export const deleteAcervroSchema = {
  description: 'Deletar acervro por ID',
  tags: ['Acervro'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  }
}

