-- CreateTable
CREATE TABLE "Acervro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Acervro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcervroLivro" (
    "livroId" INTEGER NOT NULL,
    "acervroId" INTEGER NOT NULL,

    CONSTRAINT "AcervroLivro_pkey" PRIMARY KEY ("livroId","acervroId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Acervro_nome_key" ON "Acervro"("nome");

-- AddForeignKey
ALTER TABLE "AcervroLivro" ADD CONSTRAINT "AcervroLivro_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcervroLivro" ADD CONSTRAINT "AcervroLivro_acervroId_fkey" FOREIGN KEY ("acervroId") REFERENCES "Acervro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
