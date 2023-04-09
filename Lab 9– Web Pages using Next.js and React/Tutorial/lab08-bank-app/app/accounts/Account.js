import React from 'react'

export default function Account({ account }) {
    return (
        <tr id="row-${acct.accountNo}">
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance}</td>
            <td>{account.balance <= 0 ? `<button > <i class="fas fa-trash"></i> </button>` : ''}</td>
        </tr>
    )
}
