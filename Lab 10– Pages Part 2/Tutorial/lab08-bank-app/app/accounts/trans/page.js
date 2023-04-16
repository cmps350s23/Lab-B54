'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation'

export default function Transaction() {
    //drop down
    const [accounts, setAccounts] = useState([])

    //form
    const [transaction, setTransaction] = useState({})
    const router = useRouter()

    useEffect(() => {
        getAccounts()
    }, accounts)

    async function getAccounts() {
        const data = await fetch('/api/accounts')
        setAccounts(await data.json())
    }

    function handleChange(e) {
        const newtTransaction = { ...transaction }
        newtTransaction[e.target.name] = e.target.value
        setTransaction(newtTransaction)
    }
    async function handleSubmit(e) {
        e.preventDefault()

        const data = await fetch(`/api/accounts/${transaction.accountNo}/trans`, {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers: { 'Content-Type': 'application/json' }
        })
        router.push('/', { shallow: true })
    }

    return (
        <div>
            <h3 className={styles.title}>Add Transaction</h3>
            <form id="trans-form" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="accountNo" className={styles.label}>Account No</label>
                <select name="accountNo" id="accountNo" required onChange={handleChange}>
                    {accounts.map(account => <option value={account.accountNo}>{account.accountNo} - {account.balance} QAR</option>)}
                </select>

                <label htmlFor="type" className={styles.label}>Transaction Type</label>
                <select name="transType" id="transType" required onChange={handleChange}>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </select>

                <label htmlFor="amount" className={styles.label}>Amount</label>
                <input type="number" id="amount" name="amount" required onChange={handleChange} />
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}
