import React from 'react'
import Account from './Account'
import styles from '../page.module.css'


export default function AccountsTable({ initialAccounts }) {
    return (
        <main id="main">
            <label htmlFor="acctType"> Account Type</label>

            <select id="acctType" className="dropdown">
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
            <table id="accounts" className={styles.table}>
                <tr>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
                {initialAccounts.map(account => <Account account={account}> </Account>)}
            </table>
        </main>
    )
}
