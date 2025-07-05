import { FastifyRequest, FastifyReply } from 'fastify'
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import * as authRepository from '../repository/auth.repository';
interface LoginRequest {
    email: string;
    senha: string;
}
export async function loginController(
    request: FastifyRequest<{ Body: LoginRequest }>,
    reply: FastifyReply
) {
    const { email, senha } = request.body;
    if (!email || !senha) {
        return reply.status(400).send({ message: 'Nome e senha são obrigatórios.' });
    }
    const usuario = await authRepository.findUsuarioByNome(email);
    if (!usuario) {
        return reply.status(401).send({ message: 'Usuário não encontrado.' });
    }
    const senhaValida = await argon2.verify(usuario.senha, senha);
    if (!senhaValida) {
        return reply.status(401).send({ message: 'Senha inválida.' });
    }
    const token = jwt.sign(
        { id: usuario.id, nome: usuario.nome, email: usuario.email  },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1h' }
    );
    return reply.send({ message: 'Login realizado com sucesso!', token, user: { id: usuario.id, email: usuario.email } });
}