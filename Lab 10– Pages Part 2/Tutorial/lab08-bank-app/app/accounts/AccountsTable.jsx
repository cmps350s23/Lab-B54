'use client'
import React, { useState } from 'react'
import Account from './Account'
import styles from '../page.module.css'

export default function AccountsTable({ initialAccounts }) {

    const [accounts, setAccounts] = useState(initialAccounts)

    async function handleTypeChanged(type) {
        const data = await fetch(`/api/accounts/?type=${type}`)
        setAccounts(await data.json())
    }
    async function handleDelete(accountNo) {
        const response = await fetch(`/api/accounts/${accountNo}`, {
            method: 'DELETE'
        })
        handleTypeChanged('All')
    }

    return (
        <main id="main">
            <label htmlFor="acctType"> Account Type</label>

            <select id="acctType" className="dropdown" onChange={e => handleTypeChanged(e.target.value)} name="acctType">
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
            <table id="accounts" className={styles.table}>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => <Account account={account}
                        onDelete={handleDelete}
                        key={account.accountNo}> </Account>)}
                </tbody>
            </table>
        </main>
    )
}
