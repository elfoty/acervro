export const LoginInputSchema = {
    type: 'object',
    required: ['email', 'senha'],
    properties: {
        email: { type: 'string' },
        senha: { type: 'string' }
    }
}; 
export const LoginResponseSchema = {
    type: 'object',
    properties: {
        message: { type: 'string' },
        token: { type: 'string' }
    }
}; 
export const Login400Schema = {
    type: 'object',
    properties: {
        message: { type: 'string' }
    }
}; 
export const Login401Schema = {
    type: 'object',
    properties: {
        message: { type: 'string' }
    }
};
