import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'

export default function Account({ account, onDelete }) {
    return (
        <tr id={'row-' + account.accountNo}>
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance}</td>
            <td>
                <Link href={
                    {
                        pathname: '/accounts/edit',
                        query: account
                    }
                }>
                    <button><i className="fas fa-edit">Edit</i></button>
                </Link>

                {account.balance >= 0 ? <button onClick={e => onDelete(account.accountNo)}>
                    <i className="fas fa-trash"></i> </button> : ''}
            </td>
        </tr>
    )
}
