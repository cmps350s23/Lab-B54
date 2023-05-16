import prisma from "@/app/libs/prisma";

export async function addTransaction(transaction, accountNo) {
    transaction.amount = parseInt(transaction.amount.toString());
    try {
        const account = await getAccount(accountNo);

        if (transaction.transType == 'Deposit')
            account.balance += parseInt(transaction.amount);
        else
            account.balance -= parseInt(transaction.amount);

        await prisma.update({
            where: { accountNo },
            data: account
        });

        const newTransaction = await prisma.transaction.create({
            data: transaction
        })

        return {
            message: 'transaction successful',
            newTransaction
        }

    } catch (err) {
        return {
            error: 'unable to execute the transaction successful',
            errorMessage: err.message
        }
    }
}

export async function getTransSum(accountNo, fromDate, toDate) {
    try {
        const transSum = await prisma.transaction.groupBy({
            where: {
                accountNo,
                date: {
                    gte: new Date(fromDate).toISOString(),
                    lte: new Date(toDate).toISOString()
                }
            },
            by: ['transType'],
            _sum: {
                amount: true
            }
        })
        console.log(JSON.stringify(transSum, null, 2));

        return transSum
    } catch (err) {
        console.log(err);
        return { error: err.message }
    }
}