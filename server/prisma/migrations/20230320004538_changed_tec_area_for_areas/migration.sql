/*
  Warnings:

  - The `area` column on the `technologies` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "area",
ADD COLUMN     "area" TEXT[];
