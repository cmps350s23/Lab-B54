'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, React } from 'react'
import styles from '../../page.module.css'

export default function EditAccount() {
    const searchParams = useSearchParams()

    const [account, setAccount] = useState(Object.fromEntries(searchParams))
    const router = useRouter()


    function handleChange(e) {
        const newAccount = { ...account }
        newAccount[e.target.name] = e.target.value
        setAccount(newAccount)
    }
    async function handleSubmit(e) {
        e.preventDefault()

        const data = await fetch(`/api/accounts/${account.accountNo}`, {
            method: 'PUT',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' }
        })
        router.push('/', { shallow: true })
    }

    return (
        <>
            <h3 className={styles.title}>Editing For Account No - <u>{account.accountNo}</u></h3>
            <form id="account-form" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="acctType" className={styles.label}>Account Type</label>
                <select name="acctType" id="acctType" required onChange={handleChange} value={account.acctType}>
                    <option></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance" className={styles.label} >Balance</label>
                <input type="number" name="balance" id="balance" required onChange={handleChange} value={account.balance} />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
