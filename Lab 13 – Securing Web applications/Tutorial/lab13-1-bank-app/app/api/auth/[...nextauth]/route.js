import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "enter your email" },
                password: { label: "Password", type: "password", placeholder: "enter your password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const HOST = req.headers.host || 'Not Defined';
                // console.log('host is .....', HOST);
                // const response = await fetch(`http://localhost:3002/api/login`, {
                //     method: "POST",
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })

                const HOST = req.headers.host;
                console.log('host is .....', HOST);
                const response = await fetch(`http://${HOST}/api/login`, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                // http://localhost:3004
                const user = await response.json()
                if (user && !user.error) {
                    console.log(user);
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    console.log('bad user');
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }