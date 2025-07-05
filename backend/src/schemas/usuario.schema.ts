export const getAllUsuariosSchema = {
  description: 'Listar todos os usuários',
  tags: ['Usuario'],
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idUsuario: { type: 'number' },
          nome: { type: 'string' },
          email: { type: 'string' }
        }
      }
    }
  }
}

export const getUsuarioSchema = {
  description: 'Buscar usuário por ID',
  tags: ['Usuario'],
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
        idUsuario: { type: 'number' },
        nome: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}

export const createUsuarioSchema = {
  description: 'Criar novo usuário',
  tags: ['Usuario'],
  body: {
    type: 'object',
    required: ['nome', 'email'],
    properties: {
      nome: { type: 'string' },
      email: { type: 'string' }
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        idUsuario: { type: 'number' },
        nome: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}

export const deleteUsuarioSchema = {
  description: 'Deletar usuário por ID',
  tags: ['Usuario'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  }
}

export const editUsuarioSchema = {
  description: 'Atualizar usuário por ID',
  tags: ['Usuario'],
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
      email: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        idUsuario: { type: 'number' },
        nome: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}
