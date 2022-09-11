/*
  Warnings:

  - You are about to drop the column `anotation` on the `SecureNotes` table. All the data in the column will be lost.
  - Added the required column `note` to the `SecureNotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SecureNotes" DROP COLUMN "anotation",
ADD COLUMN     "note" VARCHAR(1000) NOT NULL;
