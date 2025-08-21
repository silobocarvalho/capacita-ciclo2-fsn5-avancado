/*
  Warnings:

  - The primary key for the `Aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."Aluno" DROP CONSTRAINT "Aluno_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Aluno_id_seq";

-- AlterTable
ALTER TABLE "public"."Professor" DROP CONSTRAINT "Professor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Professor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Professor_id_seq";
