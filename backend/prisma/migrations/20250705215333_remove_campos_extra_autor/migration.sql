/*
  Warnings:

  - You are about to drop the column `bio` on the `Autor` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `Autor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Autor" DROP COLUMN "bio",
DROP COLUMN "nascimento";
