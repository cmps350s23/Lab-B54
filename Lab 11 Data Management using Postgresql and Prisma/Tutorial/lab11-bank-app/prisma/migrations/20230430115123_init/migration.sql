-- CreateTable
CREATE TABLE "Account" (
    "accountNo" TEXT NOT NULL,
    "acctType" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "minimumBalance" DOUBLE PRECISION,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountNo")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "transType" DOUBLE PRECISION NOT NULL,
    "accountNo" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountNo_fkey" FOREIGN KEY ("accountNo") REFERENCES "Account"("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE;
