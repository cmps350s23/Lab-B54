import repo from "../accounts-repo";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const account = await repo.getAccount(id)
        return Response.json(account, { status: 200 });
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const account = await request.json()
        const accountNo = params.id
        const updatedAccount = await repo.updateAccount(accountNo, account)
        return Response.json(updatedAccount)
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}
export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        const account = await repo.deleteAccount(id)
        return Response.json(account, { status: 200 });
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}