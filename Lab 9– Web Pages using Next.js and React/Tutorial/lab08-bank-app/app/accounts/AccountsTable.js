import React from 'react'
import Account from './Account'
import styles from '../page.module.css'

export default function AccountsTable({ initialAccounts }) {
    return (
        <div>
            <table id="accounts" className={styles.table}>
                <tr>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
                {initialAccounts.map(account => <Account account={account}> </Account>)}
            </table>
        </div>
    )
}
