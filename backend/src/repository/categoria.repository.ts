import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export async function getAllCategorias() {
  return prisma.categoria.findMany()
}

export async function createCategoria(data: { nome: string}) {
  return prisma.categoria.create({
    data
  })
}

export async function getCategoriaById(id: number) {
  return prisma.categoria.findUnique({
    where: { id }
  })
}

export async function deleteCategoria(id: number) {
  return prisma.categoria.delete({
    where: { id }
  })
}

export async function updateCategoria(id: number, data: { nome?: string }) {
  return prisma.categoria.update({
    where: { id },
    data
  })
}