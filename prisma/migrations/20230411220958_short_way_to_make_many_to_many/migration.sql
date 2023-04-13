/*
  Warnings:

  - You are about to drop the `developers_roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `developers_technologies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects_developers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "developers_roles" DROP CONSTRAINT "developers_roles_developerId_fkey";

-- DropForeignKey
ALTER TABLE "developers_roles" DROP CONSTRAINT "developers_roles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "developers_technologies" DROP CONSTRAINT "developers_technologies_developerId_fkey";

-- DropForeignKey
ALTER TABLE "developers_technologies" DROP CONSTRAINT "developers_technologies_technologyId_fkey";

-- DropForeignKey
ALTER TABLE "projects_developers" DROP CONSTRAINT "projects_developers_developerId_fkey";

-- DropForeignKey
ALTER TABLE "projects_developers" DROP CONSTRAINT "projects_developers_projectId_fkey";

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "development" SET DEFAULT true;

-- DropTable
DROP TABLE "developers_roles";

-- DropTable
DROP TABLE "developers_technologies";

-- DropTable
DROP TABLE "projects_developers";

-- CreateTable
CREATE TABLE "_DeveloperToTechnology" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DeveloperToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DeveloperToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToTechnology_AB_unique" ON "_DeveloperToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToTechnology_B_index" ON "_DeveloperToTechnology"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToRole_AB_unique" ON "_DeveloperToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToRole_B_index" ON "_DeveloperToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToProject_AB_unique" ON "_DeveloperToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToProject_B_index" ON "_DeveloperToProject"("B");

-- AddForeignKey
ALTER TABLE "_DeveloperToTechnology" ADD CONSTRAINT "_DeveloperToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToTechnology" ADD CONSTRAINT "_DeveloperToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToRole" ADD CONSTRAINT "_DeveloperToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToRole" ADD CONSTRAINT "_DeveloperToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToProject" ADD CONSTRAINT "_DeveloperToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToProject" ADD CONSTRAINT "_DeveloperToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
