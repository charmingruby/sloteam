/*
  Warnings:

  - You are about to drop the column `developerId` on the `technologies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "technologies" DROP CONSTRAINT "technologies_developerId_fkey";

-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "developerId";

-- CreateTable
CREATE TABLE "developers_technologies" (
    "developerId" TEXT NOT NULL,
    "technologyId" TEXT NOT NULL,

    CONSTRAINT "developers_technologies_pkey" PRIMARY KEY ("developerId","technologyId")
);

-- AddForeignKey
ALTER TABLE "developers_technologies" ADD CONSTRAINT "developers_technologies_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "developers_technologies" ADD CONSTRAINT "developers_technologies_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
