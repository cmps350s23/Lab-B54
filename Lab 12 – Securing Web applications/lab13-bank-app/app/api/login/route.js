import { getUser } from "../user/user-repo"

export async function POST(request) {
    const { email, password } = await request.json()
    const response = await getUser(email, password)
    return Response.json(response, { status: 200 })
}