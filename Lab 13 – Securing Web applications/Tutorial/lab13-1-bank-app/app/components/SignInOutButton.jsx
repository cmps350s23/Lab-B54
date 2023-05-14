'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function SignInOutButton() {
    // this will check it the user is logged In or not
    const { data: session } = useSession()
    if (session)
        return (
            <div>
                <p>Welcome {session.user.email.split('@')[0]}</p>
                <button onClick={signOut}>Sign Out</button>
            </div>
        )
    return (
        <div><button onClick={signIn}>Sign In</button></div>
    )
}
