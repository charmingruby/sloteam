/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `developers_roles` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `developers_roles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "developers_roles" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";
