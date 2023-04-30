/*
  Warnings:

  - You are about to drop the column `minimumBalance` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "minimumBalance";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "transType" SET DATA TYPE TEXT;
