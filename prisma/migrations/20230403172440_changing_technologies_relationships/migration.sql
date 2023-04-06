-- DropForeignKey
ALTER TABLE "technologies" DROP CONSTRAINT "technologies_project_id_fkey";

-- AlterTable
ALTER TABLE "technologies" ALTER COLUMN "project_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "technologies" ADD CONSTRAINT "technologies_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
