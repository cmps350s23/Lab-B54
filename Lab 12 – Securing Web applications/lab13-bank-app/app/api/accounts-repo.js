import prisma from "../libs/prisma";

export const getOwners = async () => await prisma.owner.findMany();

export async function getAccounts(type) {
    return await prisma.account.findMany({
        where: {
            ...(type && type.toLowerCase() !== "all" ? { acctType: type } : {}),
        },
        include: {
            Owner: true,
        },
    });
}

export const addAccount = async (account) =>
    await prisma.account.create({
        data: account,
    });

export const updateAccount = async (account, accountNo) => {
    console.log('before', account);
    const response = await prisma.account.update({
        where: { accountNo },
        data: account,
    });

    console.log('after update', response);
    return response
}

export const getAccount = async (accountNo) =>
    await prisma.account.findUnique({
        where: { accountNo },
    });

export const deleteAccount = async (accountNo) =>
    await prisma.account.delete({
        where: { accountNo },
    });

export const getAvgBalance = async () =>
    await prisma.account.aggregate({
        _avg: {
            balance: true,
        },
    });

export const getMinMaxBalance = async () =>
    await prisma.account.aggregate({
        _min: {
            balance: true,
        },
        _max: {
            balance: true,
        },
    });

export const getTop3Accounts = async () =>
    await prisma.account.findMany({
        orderBy: {
            balance: "desc",
        },
        take: 3,
    });



export async function addTransaction(transaction, accountNo) {
    transaction.amount = parseInt(transaction.amount.toString());
    try {
        const account = await getAccount(accountNo);

        if (transaction.transType == 'Deposit')
            account.balance += parseInt(transaction.amount);
        else
            account.balance -= parseInt(transaction.amount);

        await updateAccount(account, accountNo);
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

export async function getOwnerReport(ownerId) {
    const report = await prisma.owner.findMany({
        where: { ownerId: query.ownerId },
        include: {
            accounts: {
                include: {
                    transactions: true
                }
            }
        }
    })
    console.log(JSON.stringify(report, null, 2));
    return report
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