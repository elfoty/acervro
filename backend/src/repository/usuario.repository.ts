import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export async function getAllUsuarios() {
  return prisma.usuario.findMany()
}

export async function createUsuario(data: { 
  nome: string; 
  sobrenome: string;
  email: string;
  telefone: string;
  senha: string;
  descricao: string; 
  ISBN: string; 
  paginas: number; 
  lancamento: Date;
  nascimento: Date;
  permissoes: any; 
}) {
  return prisma.usuario.create({
    data
  })
}

export async function getLivroById(id: number) {
  return prisma.usuario.findUnique({
    where: { id }
  })
}

export async function deleteUser(id: number) {
  return prisma.usuario.delete({
    where: { id }
  })
}