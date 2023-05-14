'use server'
import { revalidatePath } from 'next/cache.js';
import * as repo from './api/accounts-repo.js'
import { redirect } from "next/navigation";

export const getAccount = async (accountNo) => {
    const account = await repo.getAccount(accountNo)
    return account
}
export const getOwners = async () => {
    const owners = await repo.getOwners()
    return owners
}

export const addAccount = async (formData) => {
    const { accountNo, acctType, balance, ownerId } = Object.fromEntries(formData.entries())
    const account = { accountNo, acctType, balance: +balance, ownerId }
    await repo.addAccount(account)
    redirect('/')
}

export const updateAccount = async (formData, accNo) => {
    const { acctType, balance, ownerId } = Object.fromEntries(formData.entries())
    const account = { acctType, balance: +balance, ownerId }
    await repo.updateAccount(account, accNo)
    redirect('/')
}

export const deleteAccount = async (accountNo) => {
    await repo.deleteAccount(accountNo)
    redirect('/')
}

export const addTransaction = async (formData, accountNo) => {
    const { transType, amount, date } = Object.fromEntries(formData.entries())
    const transaction = { transType, amount, date }
    await repo.addTransaction(transaction, accountNo)
    revalidatePath('/')
}



