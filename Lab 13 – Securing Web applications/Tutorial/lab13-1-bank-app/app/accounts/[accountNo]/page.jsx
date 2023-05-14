import styles from '../../page.module.css'
import { addAccount, updateAccount } from '@/app/actions'
import { getAccount, getOwners } from '@/app/api/accounts-repo'
import { redirect } from 'next/navigation'

export default async function Edit({ params }) {

    const owners = await getOwners()

    // this is a hack to decide if we are editing or adding a new account
    // during edit, we need to get the data of the account details
    // during add, we need to create a new account

    let account = { ownerId: '', acctType: '', balance: '' }
    const isEdit = params.accountNo != undefined && params.accountNo != 'add'
    if (isEdit) account = await getAccount(params.accountNo)

    async function handleSubmit(formData) {
        'use server'
        if (isEdit) await updateAccount(formData, params.accountNo)
        else await addAccount(formData)
        redirect('/')
    }
    return (
        <>
            {isEdit && <h3 className={styles.title}>Editing Account No [ {account.accountNo} ] </h3>}
            {!isEdit && <h3 className={styles.title}>Add New Account</h3>}

            <form id="account-form" className={styles.form} action={handleSubmit}>
                <label htmlFor="ownerId" className={styles.label}>Account No</label>

                <select name="ownerId" id="ownerId" required defaultValue={account.ownerId}>
                    <option disabled>Select Owner</option>
                    {owners.map(owner => <option key={owner.id} value={owner.id}>{owner.firstName} - {owner.lastName}</option>)}
                </select>

                <label htmlFor="acctType" className={styles.label}>Account Type</label>
                <select name="acctType" id="acctType" required defaultValue={account.acctType}>
                    <option></option>
                    <option value="Savings">Savings</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance" className={styles.label} >Balance</label>
                <input type="number" name="balance" id="balance" defaultValue={account.balance} />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
