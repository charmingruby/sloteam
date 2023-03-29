/*
  Warnings:

  - You are about to drop the `DevelopersRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DevelopersRoles" DROP CONSTRAINT "DevelopersRoles_developerId_fkey";

-- DropForeignKey
ALTER TABLE "DevelopersRoles" DROP CONSTRAINT "DevelopersRoles_roleId_fkey";

-- DropTable
DROP TABLE "DevelopersRoles";

-- CreateTable
CREATE TABLE "developers_roles" (
    "developerId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "developers_roles_pkey" PRIMARY KEY ("developerId","roleId")
);

-- AddForeignKey
ALTER TABLE "developers_roles" ADD CONSTRAINT "developers_roles_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "developers_roles" ADD CONSTRAINT "developers_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
