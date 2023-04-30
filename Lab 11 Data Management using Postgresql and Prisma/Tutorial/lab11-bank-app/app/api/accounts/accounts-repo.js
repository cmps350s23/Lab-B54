import { nanoid } from 'nanoid'
import path from 'path'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export default class AccountsRepo {

    async getAccounts(type) {
        try {
            if (type == 'Saving' || type == 'Current')
                return await prisma.account.findMany({ where: { acctType: type } })
            return await prisma.account.findMany()
        }

        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addAccount(account) {
        try {
            account.accountNo = nanoid(10).slice(0, 5)
            const newAccount = await prisma.account.create({ data: account })
            return newAccount
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(account, accountNo) {
        try {
            console.log('update is getting called ', account, accountNo);

            const updatedAccount = await prisma.account.update({ where: { accountNo }, data: account })
            return updatedAccount
        } catch (err) {
            console.log(err);
            return { error: err.message }
        }
    }

    async getAccount(accNo) {
        try {
            return await prisma.account.findUnique({ where: { accountNo: accNo } })
        } catch (err) {
            return { error: err.message }
        }
    }

    async deleteAccount(accNo) {
        try {
            const deleted = await prisma.account.delete({ where: { accountNo: accNo } })
            return `deleted successfully ${deleted}`
        } catch (err) {
            console.log(err);
            return "Unable to delete account because it does not exist"
        }

    }

    async addTransaction(transaction, accountNo) {

        try {
            transaction.amount = parseFloat(transaction.amount)
            const account = await this.getAccount(accountNo)

            if (account) {
                if (transaction.transType == 'Deposit')
                    account.balance += parseInt(transaction.amount);
                else
                    account.balance -= parseInt(transaction.amount);

                //   1 we need to update the current account

                //we need to save the transaction inside the transaction table

                await this.updateAccount(account, accountNo)
                return await prisma.transaction.create({ data: transaction })

            }

        } catch (err) {
            return {
                issue: 'unable to execute the transaction successful',
                reason: err.message
            }
        }
    }

}

