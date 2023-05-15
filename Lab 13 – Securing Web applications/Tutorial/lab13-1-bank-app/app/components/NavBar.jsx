'use client'
import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import SignOutButton from './SignOutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { useSession } from 'next-auth/react'

export default function NavBar() {
    const { data: session } = useSession()

    return (
        <>
            <SignOutButton></SignOutButton>
            {session && <nav className={styles.nav}>
                <ul>
                    <li>Alpha Bank</li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/accounts/trans">Add Transaction</Link></li>
                    <li><Link href="/accounts/report">Summary Reports</Link></li>
                </ul>
            </nav>}
        </>

    )
}
