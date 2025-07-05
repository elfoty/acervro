import { PrismaClient, Permissao } from '../generated/prisma';
import argon2 from 'argon2';
const prisma = new PrismaClient();

async function main() {
    console.log('Iniciando seed...');
    const senhaHash = await argon2.hash('senha123'); //Gerar hash

    // --- Criar 10 Autores ---
    const autores = await prisma.autor.createMany({
        data: [
            { nome: 'J.K. Rowling', nascimento: new Date('1965-07-31'), bio: 'Autora de Harry Potter' },
            { nome: 'George Orwell', nascimento: new Date('1903-06-25'), bio: 'Autor de 1984' },
            { nome: 'Agatha Christie', nascimento: new Date('1890-09-15'), bio: 'Rainha do Crime' },
            { nome: 'Stephen King', nascimento: new Date('1947-09-21'), bio: 'Mestre do Terror' },
            { nome: 'Machado de Assis', nascimento: new Date('1839-06-21'), bio: 'Fundador da ABL' },
            { nome: 'Clarice Lispector', nascimento: new Date('1920-12-10'), bio: 'Modernista brasileira' },
            { nome: 'Tolkien', nascimento: new Date('1892-01-03'), bio: 'Criador de Senhor dos Anéis' },
            { nome: 'Isaac Asimov', nascimento: new Date('1920-01-02'), bio: 'Pai da Ficção Científica' },
            { nome: 'Jane Austen', nascimento: new Date('1775-12-16'), bio: 'Romances clássicos' },
            { nome: 'Neil Gaiman', nascimento: new Date('1960-11-10'), bio: 'Autor de Sandman' }
        ]
    });
    console.log(`${autores.count} autores criados!`);

    // --- Criar 10 Categorias (nomes únicos) ---
    const categorias = await prisma.categoria.createMany({
        data: [
            { nome: 'Fantasia' },
            { nome: 'Ficção Científica' },
            { nome: 'Distopia' },
            { nome: 'Mistério' },
            { nome: 'Terror' },
            { nome: 'Romance' },
            { nome: 'Clássico' },
            { nome: 'História' },
            { nome: 'Biografia' },
            { nome: 'Poesia' }
        ]
    });
    console.log(`${categorias.count} categorias criadas!`);

    // --- Criar 10 Livros ---
    const livros = await prisma.livro.createMany({
        data: [
            { nome: 'Harry Potter e a Pedra Filosofal', ISBN: '9788532530833', paginas: 223, lancamento: new Date('1997-06-26'), usuarioId: 2 },
            { nome: '1984', ISBN: '9780451524935', paginas: 328, lancamento: new Date('1949-06-08'), usuarioId: 1 },
            { nome: 'Assassinato no Expresso do Oriente', ISBN: '9788532522852', paginas: 256, lancamento: new Date('1934-01-01'), usuarioId: 2 },
            { nome: 'O Iluminado', ISBN: '9788581053421', paginas: 447, lancamento: new Date('1977-01-28'), usuarioId: 1 },
            { nome: 'Dom Casmurro', ISBN: '9788538077105', paginas: 208, lancamento: new Date('1899-01-01'), usuarioId: 2 },
            { nome: 'A Hora da Estrela', ISBN: '9788525416123', paginas: 96, lancamento: new Date('1977-01-01'), usuarioId: 2 },
            { nome: 'O Hobbit', ISBN: '9788533613379', paginas: 310, lancamento: new Date('1937-09-21'), usuarioId: 2 },
            { nome: 'Fundação', ISBN: '9788576572008', paginas: 320, lancamento: new Date('1951-05-01'), usuarioId: 1 },
            { nome: 'Orgulho e Preconceito', ISBN: '9788532272741', paginas: 424, lancamento: new Date('1813-01-28'), usuarioId: 1 },
            { nome: 'Deuses Americanos', ISBN: '9788532522853', paginas: 560, lancamento: new Date('2001-06-19'), usuarioId: 1 } // Exemplo de usuário associado
        ]
    });
    console.log(`${livros.count} livros criados!`);

    // --- Relacionar Livros com Autores (LivroAutor) ---
    const todosAutores = await prisma.autor.findMany();
    const todosLivros = await prisma.livro.findMany();

    await prisma.livroAutor.createMany({
        data: [
            // Harry Potter -> J.K. Rowling
            { livroId: todosLivros[0].id, autorId: todosAutores[0].id },
            // 1984 -> George Orwell
            { livroId: todosLivros[1].id, autorId: todosAutores[1].id },
            // Assassinato... -> Agatha Christie
            { livroId: todosLivros[2].id, autorId: todosAutores[2].id },
            // O Iluminado -> Stephen King
            { livroId: todosLivros[3].id, autorId: todosAutores[3].id },
            // Dom Casmurro -> Machado de Assis
            { livroId: todosLivros[4].id, autorId: todosAutores[4].id },
            // A Hora... -> Clarice Lispector
            { livroId: todosLivros[5].id, autorId: todosAutores[5].id },
            // O Hobbit -> Tolkien
            { livroId: todosLivros[6].id, autorId: todosAutores[6].id },
            // Fundação -> Isaac Asimov
            { livroId: todosLivros[7].id, autorId: todosAutores[7].id },
            // Orgulho... -> Jane Austen
            { livroId: todosLivros[8].id, autorId: todosAutores[8].id },
            // Deuses... -> Neil Gaiman
            { livroId: todosLivros[9].id, autorId: todosAutores[9].id }
        ]
    });
    console.log('Relacionamentos Livro-Autor criados!');

    // --- Relacionar Livros com Categorias (CategoriaLivro) ---
    const todasCategorias = await prisma.categoria.findMany();

    await prisma.categoriaLivro.createMany({
        data: [
            // Harry Potter -> Fantasia
            { livroId: todosLivros[0].id, categoriaId: todasCategorias[0].id },
            // 1984 -> Distopia
            { livroId: todosLivros[1].id, categoriaId: todasCategorias[2].id },
            // Assassinato... -> Mistério
            { livroId: todosLivros[2].id, categoriaId: todasCategorias[3].id },
            // O Iluminado -> Terror
            { livroId: todosLivros[3].id, categoriaId: todasCategorias[4].id },
            // Dom Casmurro -> Clássico
            { livroId: todosLivros[4].id, categoriaId: todasCategorias[6].id },
            // A Hora... -> Romance
            { livroId: todosLivros[5].id, categoriaId: todasCategorias[5].id },
            // O Hobbit -> Fantasia
            { livroId: todosLivros[6].id, categoriaId: todasCategorias[0].id },
            // Fundação -> Ficção Científica
            { livroId: todosLivros[7].id, categoriaId: todasCategorias[1].id },
            // Orgulho... -> Romance
            { livroId: todosLivros[8].id, categoriaId: todasCategorias[5].id },
            // Deuses... -> Fantasia
            { livroId: todosLivros[9].id, categoriaId: todasCategorias[0].id }
        ]
    });
    console.log('Relacionamentos Livro-Categoria criados!');

    // --- Criar 10 Usuários ---
    await prisma.usuario.createMany({
        data: [
            {
                nome: 'Alice',
                sobrenome: 'Silva',
                email: 'alice@email.com',
                telefone: '11999999999',
                senha: senhaHash,
                nascimento: new Date('1990-05-15'),
                permissoes: Permissao.COMUM
            },
            {
                nome: 'Admin',
                sobrenome: 'Sistema',
                email: 'admin@email.com',
                telefone: '11988888888',
                senha: senhaHash,
                nascimento: new Date('1985-10-22'),
                permissoes: Permissao.ADMIN
            },
            // ... (adicione mais 8 usuários seguindo o padrão)
        ]
    });
    console.log('10 usuários criados!');
}

main()
    .catch((e) => {
        console.error('Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });