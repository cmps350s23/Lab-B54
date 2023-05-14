import { getOwners } from "../accounts-repo"

export async function GET(request) {
    const owners = await getOwners()
    return Response.json(owners)
}
