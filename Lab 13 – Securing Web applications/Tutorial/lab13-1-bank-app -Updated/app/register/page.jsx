'use client'
import styles from './page.module.css'
import { registerUser } from '../actions/users'

export default function Register() {

    const handleSubmit = async (formData) => registerUser(formData)

    return (
        <div className={styles.container}>
            <h2 className={styles.registerTitle}>Register</h2>

            <form className={styles.registerForm} action={handleSubmit}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                    />
                </div>

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

                <button className={[styles.btn, styles.btnHtmlForm]} type="submit" value="Log in">
                    Register
                </button>
            </form>
        </div>
    )
}
