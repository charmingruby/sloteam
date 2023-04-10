/*
  Warnings:

  - You are about to drop the `_DeveloperToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DeveloperToProject" DROP CONSTRAINT "_DeveloperToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToProject" DROP CONSTRAINT "_DeveloperToProject_B_fkey";

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "development" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "_DeveloperToProject";

-- CreateTable
CREATE TABLE "projects_developers" (
    "projectId" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,

    CONSTRAINT "projects_developers_pkey" PRIMARY KEY ("projectId","developerId")
);

-- AddForeignKey
ALTER TABLE "projects_developers" ADD CONSTRAINT "projects_developers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_developers" ADD CONSTRAINT "projects_developers_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
