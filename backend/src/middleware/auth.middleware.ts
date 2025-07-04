import { FastifyRequest, FastifyReply } from 'fastify';
export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
    try {
        console.log("Verificando JWT");
        await request.jwtVerify();
    } catch (err) {
        return reply.status(401).send({ message: 'Token inválido ou ausente' });
    }
}