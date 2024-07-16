-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "environmentContent" DROP NOT NULL,
ALTER COLUMN "socialContent" DROP NOT NULL,
ALTER COLUMN "governanceContent" DROP NOT NULL;
