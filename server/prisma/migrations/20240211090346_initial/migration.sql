-- CreateEnum
CREATE TYPE "BlockItemType" AS ENUM ('Website', 'KeyWord');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "isBlockingEnabled" BOOLEAN NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blockList" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "blockList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blockItem" (
    "id" SERIAL NOT NULL,
    "blockListId" INTEGER NOT NULL,
    "type" "BlockItemType" NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blockItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "account_ownerId_key" ON "account"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "blockList_ownerId_key" ON "blockList"("ownerId");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blockList" ADD CONSTRAINT "blockList_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blockItem" ADD CONSTRAINT "blockItem_blockListId_fkey" FOREIGN KEY ("blockListId") REFERENCES "blockList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
