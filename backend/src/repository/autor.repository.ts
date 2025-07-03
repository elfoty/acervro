import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export async function getAllAutores() {
  return prisma.autor.findMany()
}

export async function createAutor(data: { nome: string; nascimento: Date; bio: string }) {
  return prisma.autor.create({
    data
  })
}

export async function getAutorById(id: number) {
  return prisma.autor.findUnique({
    where: { id }
  })
}

export async function deleteAutor(id: number) {
  return prisma.autor.delete({
    where: { id }
  })
}

export async function updateAutor(id: number, data: { nome?: string; nascimento?: Date; bio?: string }) {
  return prisma.autor.update({
    where: { id },
    data
  })
}
