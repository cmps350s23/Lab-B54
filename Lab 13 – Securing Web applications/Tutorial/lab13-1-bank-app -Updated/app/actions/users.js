'use server'
import { redirect } from 'next/navigation';
import * as userRepo from '../api/users/user-repo'
import { revalidatePath } from "next/cache";


export const registerUser = async (formData) => {
    const { name, email, password } = Object.fromEntries(formData.entries())
    const user = { name, email, password }
    const newUser = await userRepo.createUser(user)
    if (newUser.error) return

    redirect('/login')
}

export const loginUser = async (formData) => {
    const { email, password } = Object.fromEntries(formData.entries())
    const user = await userRepo.getUser(email, password)
    if (user.error) return user.error

    localStorage.setItem('user', JSON.stringify(user))
    revalidatePath('/')
}