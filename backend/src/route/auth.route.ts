import { FastifyInstance } from 'fastify'
import { loginController } from '../controller/auth.controller';
import { LoginInputSchema, LoginResponseSchema, Login400Schema, Login401Schema } from '../schemas/auth.schema';
import { verifyJWT } from '../middleware/auth.middleware';
export async function authRoutes(fastify: FastifyInstance) {
    fastify.post('/auth/login', {
        schema: {
            tags: ['Autenticação'],
            summary: 'Realiza login e gera um token JWT',
            body: LoginInputSchema,
            response: {
                200: LoginResponseSchema,
                400: Login400Schema,
                401: Login401Schema
            }
        },
        handler: loginController
    });

    fastify.get('/me', { preHandler: [verifyJWT] }, async (request, reply) => {
        // O usuário está disponível em request.user
        return { user: request.user };
    });
}

export default authRoutes;