import prisma from "@/app/libs/prisma";


export const createUser = async (user) => {
    try {
        // before adding the user we need to hash the password
        // add the bcrypt hash here

        const newUser = await prisma.user.create({
            data: user
        })
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


        return user
    } catch (error) {
        return { error: error.message }
    }
}