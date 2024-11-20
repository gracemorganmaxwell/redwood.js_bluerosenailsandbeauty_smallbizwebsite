/*
  Warnings:

  - You are about to drop the column `address` on the `GiftCardRequest` table. All the data in the column will be lost.
  - Added the required column `email` to the `GiftCardRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `GiftCardRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GiftCardRequest" DROP COLUMN "address",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "recipient_address" TEXT,
ADD COLUMN     "recipient_email" TEXT,
ALTER COLUMN "gifter_address" DROP NOT NULL;
