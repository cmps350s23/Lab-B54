// npm i fs-extra   
import AccountRepo from "./account-repo.js";
const repo = new AccountRepo();

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    const accounts = await repo.getAccounts(type)

    return Response.json(accounts, { status: 200 })
}

export async function POST(request) {
    const account = await request.json()
    console.log(account);
    return new Response('Thanks for posting a new account!')
}