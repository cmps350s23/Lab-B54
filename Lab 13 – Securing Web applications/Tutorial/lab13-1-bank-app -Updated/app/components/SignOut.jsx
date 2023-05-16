'use client'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function SignOut() {
    const { data: session } = useSession()

    return (

        <div>
            <button class="btn btn-secondary" onClick={signOut}>
                Logout - <span class="badge bg-primary">{session.user.name.toUpperCase()}</span>
            </button>
        </div>
    )


}
