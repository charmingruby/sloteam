/*
  Warnings:

  - You are about to drop the column `developerId` on the `roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "roles" DROP CONSTRAINT "roles_developerId_fkey";

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "developerId";

-- CreateTable
CREATE TABLE "_DeveloperToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToRole_AB_unique" ON "_DeveloperToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToRole_B_index" ON "_DeveloperToRole"("B");

-- AddForeignKey
ALTER TABLE "_DeveloperToRole" ADD CONSTRAINT "_DeveloperToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToRole" ADD CONSTRAINT "_DeveloperToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
