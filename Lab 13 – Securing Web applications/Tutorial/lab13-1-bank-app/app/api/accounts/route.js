import { getAccounts, addAccount } from "../accounts-repo"
import jwt from 'jsonwebtoken'

export async function GET(request) {
    try {
        // check the token inside the header

        // const authorization = request.headers.get('authorization')

        // if (!authorization)
        //     return Response.json({ error: "You need to provide authentication" }, { status: 401 })

        // // check if the token is valid
        // jwt.verify(authorization, process.env.SECRET_KEY)

        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type')

        const accounts = await getAccounts(type)

        return Response.json(accounts)
    } catch (error) {
        return Response.json({ error: "Invalid Token" }, { status: 401 })
    }
}

export async function POST(request) {

    const account = await request.json()
    console.log(account);
    const newAccount = await addAccount(account)
    return Response.json(newAccount)

}