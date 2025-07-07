/*
  Warnings:

  - Added the required column `capa` to the `Livro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Livro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Livro" ADD COLUMN     "capa" TEXT NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL;
