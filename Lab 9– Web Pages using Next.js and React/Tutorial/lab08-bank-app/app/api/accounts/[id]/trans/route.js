import repo from "../../accounts-repo";

export async function POST(request) {
    try {
        const transaction = await request.json()
        console.log(transaction);
        const response = await repo.addTransaction(transaction)
        return Response.json(response)

    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}