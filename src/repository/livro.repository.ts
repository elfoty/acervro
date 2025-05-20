import { Autor, PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

interface CreateLivroInput {
  nome: string
  ISBN: string
  paginas: number
  lancamento: Date
  autorIds: number[]  
  categoriaIds: number[]
}

export async function getAllLivros() {
  return prisma.livro.findMany({
    include: {
      autores: {
        include: {
          autor: true,
        },
      },
      categoria: {
        include: { categoria: true },
      }
    },
  })
}

export async function createLivro(data: CreateLivroInput) {
  // 1. Criar o livro
  const livro = await prisma.livro.create({
    data: {
      nome: data.nome,
      ISBN: data.ISBN,
      paginas: data.paginas,
      lancamento: data.lancamento,
    },
  })

  await prisma.livroAutor.createMany({
    data: data.autorIds.map((autorId) => ({
      livroId: livro.id,
      autorId,
    })),
    skipDuplicates: true, 
  })

  await prisma.categoriaLivro.createMany({
    data: data.categoriaIds.map((categoriaId) => ({
      livroId: livro.id,
      categoriaId,
    })),
    skipDuplicates: true,
  })

  return prisma.livro.findUnique({
    where: { id: livro.id },
    include: {
        autores: {
            include: {
                autor: true,
            },
        },
        categoria: { 
            include: { 
                categoria: true 
            } 
        }
    },
  })
}

export async function getLivroById(id: number) {
  return prisma.livro.findUnique({
    where: { id },
    include: {
      autores: {
        include: {
          autor: true,
        },
      },
      categoria: {
        include: { categoria: true },
      },
    },
  })
}


export async function deleteLivro(id: number) {
  return prisma.livro.delete({
    where: { id }
  })
}

export async function updateLivro(id: number, data: Partial<CreateLivroInput>) {
  return prisma.livro.update({
    where: { id },
    data,
  })
}