/*
  Warnings:

  - Added the required column `businessItem` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessType` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('LIGHT', 'DARK');

-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('MANUFACTURING', 'WHOLESALE', 'RETAIL', 'SERVICES', 'CONSTRUCTION', 'FINANCE', 'INSURANCE', 'HOSPITALITY', 'FOOD_AND_BEVERAGE', 'TRANSPORTATION', 'REAL_ESTATE');

-- CreateEnum
CREATE TYPE "BusinessItem" AS ENUM ('ELECTRONICS', 'FOOD_PRODUCTS', 'APPAREL', 'COSMETICS', 'SOFTWARE', 'AUTOMOBILES', 'MEDICAL_DEVICES');

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "businessItem" "BusinessItem" NOT NULL,
ADD COLUMN     "businessType" "BusinessType" NOT NULL;
