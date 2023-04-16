import repo from "./accounts-repo"

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type')

        const accounts = await repo.getAccounts(type)

        return Response.json(accounts)
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}

export async function POST(request) {

    try {
        const account = await request.json()
        console.log(account);
        const newAccount = await repo.addAccount(account)
        return Response.json(newAccount)
    } catch (error) {
        return Response.json(error, { status: 500 });
    }

}