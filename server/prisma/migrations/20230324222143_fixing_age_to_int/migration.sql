/*
  Warnings:

  - Added the required column `email` to the `developers` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `age` on the `developers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "developers" ADD COLUMN     "email" TEXT NOT NULL,
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;
