import prisma from "@/app/libs/prisma";
import { hash, compare, genSalt } from "bcrypt";

export const createUser = async (user) => {
    try {
        // before adding the user we need to hash the password
        // add the bcrypt hash here
        const salt = await genSalt(10)
        console.log(salt);
        user.password = await hash(user.password, salt)

        const newUser = await prisma.user.create({
            data: user
        })

        delete newUser.password
        return newUser
    } catch (error) {
        return { error: error.message }
    }
}

export const getUser = async (email, password) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email: email }
        })
        if (!user) return { error: "User does not exist" }

        //add the bcrypt compare here
        const isMath = await compare(password, user.password)

        if (!isMath) return { error: "Password is incorrect" }

        // delete the password from the user object before returning it

        delete user.password
        return user
    } catch (error) {
        return { error: error.message }
    }
}