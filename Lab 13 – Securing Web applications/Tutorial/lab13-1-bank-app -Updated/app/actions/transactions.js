'user server'
import * as accountRepo from '../api/accounts/[id]/trans/trans-repo'
import { revalidatePath } from 'next/navigation'

export const addTransaction = async (formData, accountNo) => {
    const { transType, amount, date } = Object.fromEntries(formData.entries())
    const transaction = { transType, amount, date }
    await accountRepo.addTransaction(transaction, accountNo)
    revalidatePath('/')
}
