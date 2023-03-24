/*
  Warnings:

  - You are about to drop the column `category_id` on the `developers` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `developers` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `technologies` table. All the data in the column will be lost.
  - You are about to drop the column `developer_id` on the `technologies` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_project_id_fkey";

-- DropForeignKey
ALTER TABLE "developers" DROP CONSTRAINT "developers_category_id_fkey";

-- DropForeignKey
ALTER TABLE "developers" DROP CONSTRAINT "developers_project_id_fkey";

-- DropForeignKey
ALTER TABLE "technologies" DROP CONSTRAINT "technologies_category_id_fkey";

-- DropForeignKey
ALTER TABLE "technologies" DROP CONSTRAINT "technologies_developer_id_fkey";

-- AlterTable
ALTER TABLE "developers" DROP COLUMN "category_id",
DROP COLUMN "project_id";

-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "category_id",
DROP COLUMN "developer_id";

-- DropTable
DROP TABLE "categories";

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DeveloperToTechnology" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DeveloperToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DeveloperToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToTechnology_AB_unique" ON "_DeveloperToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToTechnology_B_index" ON "_DeveloperToTechnology"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToProject_AB_unique" ON "_DeveloperToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToProject_B_index" ON "_DeveloperToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeveloperToRole_AB_unique" ON "_DeveloperToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_DeveloperToRole_B_index" ON "_DeveloperToRole"("B");

-- AddForeignKey
ALTER TABLE "_DeveloperToTechnology" ADD CONSTRAINT "_DeveloperToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToTechnology" ADD CONSTRAINT "_DeveloperToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToProject" ADD CONSTRAINT "_DeveloperToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToProject" ADD CONSTRAINT "_DeveloperToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToRole" ADD CONSTRAINT "_DeveloperToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeveloperToRole" ADD CONSTRAINT "_DeveloperToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
