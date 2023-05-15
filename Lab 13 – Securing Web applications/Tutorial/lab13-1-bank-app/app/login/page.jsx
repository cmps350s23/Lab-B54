'use client'
import { signIn } from 'next-auth/react'
import styles from './page.module.css'
import Link from 'next/link'
export default function Login() {

    async function handleSubmit(event) {
        event.preventDefault()
        const email = event.currentTarget.email.value
        const password = event.currentTarget.password.value
        // Send email and password to your API route

        console.log('email: ', email);
        console.log('password: ', password);
        await signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
            redirect: true
        })
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.loginTitle}>Log in</h2>

            <form className={styles.loginForm} onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="email">Email </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="me@example.com"
                        name="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                    />
                </div>

                <button className={[styles.btn, styles.btnHtmlForm].join(' ')} type="submit" value="Log in">
                    Log in
                </button>
                <Link href={'/register'}> New User? Register </Link>
            </form>
        </div>
    )
}
