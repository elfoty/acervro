import { Autor, PrismaClient } from '../../generated/prisma'
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });


const prisma = new PrismaClient()

interface CreateLivroInput {
  nome: string
  ISBN: string
  paginas: number
  lancamento: Date
  autorIds: number[]
  categoriaIds: number[]
  usuarioId:number
}

interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    pageCount?: number;
    industryIdentifiers?: {
      type: string;
      identifier: string;
    }[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

export async function getAllLivros(id: number) {
  return prisma.livro.findMany({
    where: { usuarioId: id },
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
      usuarioId: data.usuarioId, // Associar o livro ao usuário
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

export async function searchBooks(query: string, maxResults: number, searchType: 'general' | 'isbn' = 'general',) {
  try {
    let url = 'https://www.googleapis.com/books/v1/volumes';
    
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=' + maxResults + '&key=' + process.env.GOOGLE_BOOKS_API_KEY);
    
    return response.data.items
  } catch (error) {
    console.error('Error searching Google Books:', error);
    throw new Error('Failed to search books');
  }
}

export async function importBookFromGoogle(googleBookId: string, categoriaIds: number[] = []) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${googleBookId}`);
    const book = response.data as GoogleBook;

    const autorPromises = (book.volumeInfo.authors || []).map(async (authorName) => {
      const existingAutor = await prisma.autor.findFirst({
        where: { nome: authorName }
      });

      if (existingAutor) return existingAutor.id;

      // Adicionando valores padrão para campos obrigatórios
      const newAutor = await prisma.autor.create({
        data: {
          nome: authorName,
          nascimento: new Date(1900, 0, 1), // Data padrão
          bio: 'Autor importado do Google Books' // Bio padrão
        }
      });

      return newAutor.id;
    });

    const autorIds = await Promise.all(autorPromises);
    // ... resto do código permanece igual
  } catch (error) {
    console.error('Error importing book:', error);
    throw error;
  }
}

export async function findOrImportBookByISBN(isbn: string, categoriaIds: number[] = []) {
  try {
    // 1. Verificar se já existe no banco de dados
    const existingBook = await prisma.livro.findFirst({
      where: { ISBN: isbn },
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
    });

    if (existingBook) return existingBook;

    // 2. Se não existir, importar da API Google Books
    const googleBooks = await searchBooks(isbn, 5, 'isbn');
    if (googleBooks.length === 0) {
      throw new Error('Book not found with this ISBN');
    }

    // Pegar o primeiro resultado (deve ser o mais relevante para ISBN)
    return await importBookFromGoogle(googleBooks[0].id, categoriaIds);
  } catch (error) {
    console.error('Error finding/importing book by ISBN:', error);
    throw error;
  }
}