import { signIn } from 'next-auth/react';
import styles from './page.module.css'
export default function Register() {

    async function handleSubmit(event) {

        event.preventDefault()
        const email = event.currentTarget.email.value
        const password = event.currentTarget.password.value
        // Send email and password to your API route

        console.log('email: ', email);
        console.log('password: ', password);
        await singIn('credentials', {
            email,
            password,
            callbackUrl: '/',
            redirect: true
        })
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.registerTitle}>Register</h2>

            <form className={styles.registerForm}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Eren Buruk"
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
