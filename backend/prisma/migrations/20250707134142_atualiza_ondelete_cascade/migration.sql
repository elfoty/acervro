-- DropForeignKey
ALTER TABLE "AcervroLivro" DROP CONSTRAINT "AcervroLivro_acervroId_fkey";

-- DropForeignKey
ALTER TABLE "AcervroLivro" DROP CONSTRAINT "AcervroLivro_livroId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriaLivro" DROP CONSTRAINT "CategoriaLivro_livroId_fkey";

-- DropForeignKey
ALTER TABLE "LivroAutor" DROP CONSTRAINT "LivroAutor_autorId_fkey";

-- DropForeignKey
ALTER TABLE "LivroAutor" DROP CONSTRAINT "LivroAutor_livroId_fkey";

-- AddForeignKey
ALTER TABLE "LivroAutor" ADD CONSTRAINT "LivroAutor_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroAutor" ADD CONSTRAINT "LivroAutor_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriaLivro" ADD CONSTRAINT "CategoriaLivro_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcervroLivro" ADD CONSTRAINT "AcervroLivro_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcervroLivro" ADD CONSTRAINT "AcervroLivro_acervroId_fkey" FOREIGN KEY ("acervroId") REFERENCES "Acervro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
