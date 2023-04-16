'use client'
import React, { useState } from 'react'
import styles from '../../page.module.css'

export default function AddAccount() {
    const [account, setAccount] = useState({})

    function handleChange(e) {
        const newAccount = { ...account }
        newAccount[e.target.name] = e.target.value
        setAccount(newAccount)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const data = await fetch('/api/accounts', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' }
        })
        const newAccount = await data.json()
        console.log(newAccount);
    }

    return (
        <>
            {JSON.stringify(account)}
            <h3>Add Account</h3>
            <form id="account-form" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="acctType" className={styles.label}>Account Type</label>
                <select name="acctType" id="acctType" required onChange={handleChange}>
                    <option></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance" className={styles.label}>Balance</label>
                <input type="number" name="balance" id="balance" required onChange={handleChange} />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
