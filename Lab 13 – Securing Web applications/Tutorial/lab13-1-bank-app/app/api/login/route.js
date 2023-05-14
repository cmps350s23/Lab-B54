import { getUser } from "../user/user-repo"
import jwt from 'jsonwebtoken'

export async function POST(request) {
    const { email, password } = await request.json()
    const response = await getUser(email, password)

    if (response.error)
        return Response.json(response, { status: 401 })
    response.id_token = jwt.sign(response, process.env.SECRET_KEY, { expiresIn: '1h' })

    return Response.json(response, { status: 200 })
}