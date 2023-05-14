import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import SignInOutButton from './SignInOutButton'

export default function NavBar() {
    return (
        <>
            <SignInOutButton></SignInOutButton>
            <nav className={styles.nav}>
                <ul>
                    <li>Alpha Bank</li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/accounts/trans">Add Transaction</Link></li>
                    <li><Link href="/accounts/report">Summary Reports</Link></li>
                </ul>
            </nav>
        </>

    )
}
