import React from 'react'

export default function AccountsTable({ initialAccounts }) {
    return (
        <div>
            {
                initialAccounts.map(account => <p>{account.accountNo}</p>)
            }
        </div>
    )
}
