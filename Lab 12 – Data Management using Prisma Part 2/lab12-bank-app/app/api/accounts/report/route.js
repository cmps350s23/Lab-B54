import AccountsRepo from "../../accounts-repo"
const repo = new AccountsRepo()

// Just test here all your methods
export async function GET(request) {
    const query = await request.json()
    const accounts = await repo.getReport(query)
    return Response.json(accounts)
}

export async function POST(request) {

    const query = await request.json()
    // console.log(query);
    // const report = await repo.getAvgBalance()
    // const report = await repo.getMinMaxBalance()
    // const report = await repo.getTop3Accounts()
    // const report = await repo.getTransSum()
    const report = await repo.getOwnerReport('ckockkdifg2fpt')
    return Response.json(report)

}