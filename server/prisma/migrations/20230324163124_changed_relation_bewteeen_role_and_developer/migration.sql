/*
  Warnings:

  - You are about to drop the `_DeveloperToRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DeveloperToTechnology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DeveloperToRole" DROP CONSTRAINT "_DeveloperToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToRole" DROP CONSTRAINT "_DeveloperToRole_B_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToTechnology" DROP CONSTRAINT "_DeveloperToTechnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToTechnology" DROP CONSTRAINT "_DeveloperToTechnology_B_fkey";

-- AlterTable
ALTER TABLE "roles" ADD COLUMN     "developerId" TEXT;

-- AlterTable
ALTER TABLE "technologies" ADD COLUMN     "developerId" TEXT;

-- DropTable
DROP TABLE "_DeveloperToRole";

-- DropTable
DROP TABLE "_DeveloperToTechnology";

-- AddForeignKey
ALTER TABLE "technologies" ADD CONSTRAINT "technologies_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "developers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "developers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
