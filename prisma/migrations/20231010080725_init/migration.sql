-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "unit" TEXT NOT NULL,
    "rate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceno" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "basetotal" TEXT NOT NULL,
    "remaining" TEXT NOT NULL
);
