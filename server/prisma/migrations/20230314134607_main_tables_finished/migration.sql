-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "developers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technologies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "advantages" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "developer_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT[],
    "tags" TEXT[],
    "icon" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "developers" ADD CONSTRAINT "developers_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technologies" ADD CONSTRAINT "technologies_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technologies" ADD CONSTRAINT "technologies_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
