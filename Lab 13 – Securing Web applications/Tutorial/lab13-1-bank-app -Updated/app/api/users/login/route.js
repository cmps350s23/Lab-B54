import { getUser } from "../user-repo"
import jwt from "jsonwebtoken"


export async function POST(request) {
    const { email, password } = await request.json()
    const response = await getUser(email, password)

    if (response.error)
        return Response.json(response, { status: 401 })

    // Generate JWT token and add it to the response
    response.id_token = jwt.sign(response, process.env.JWT_SECRET, { expiresIn: "1h" })

    return Response.json(response, { status: 200 })
}