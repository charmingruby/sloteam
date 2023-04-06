/*
  Warnings:

  - You are about to drop the `_DeveloperToRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DeveloperToRole" DROP CONSTRAINT "_DeveloperToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeveloperToRole" DROP CONSTRAINT "_DeveloperToRole_B_fkey";

-- DropTable
DROP TABLE "_DeveloperToRole";

-- CreateTable
CREATE TABLE "DevelopersRoles" (
    "developerId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "DevelopersRoles_pkey" PRIMARY KEY ("developerId","roleId")
);

-- AddForeignKey
ALTER TABLE "DevelopersRoles" ADD CONSTRAINT "DevelopersRoles_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevelopersRoles" ADD CONSTRAINT "DevelopersRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
