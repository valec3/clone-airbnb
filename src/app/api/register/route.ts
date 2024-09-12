import bcrypt from 'bcrypt'
import prismaClient from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'
// export const runtime = 'edge'
export async function POST(request: Request) {
    try {
        const { email, password, name, lastName, birthday } =
            await request.json()
        console.log('email: ', email)
        const hashPassword = await bcrypt.hash(password, 10)
        const isUserExist = await prismaClient.user.findFirst({
            where: {
                email
            }
        })
        if (isUserExist) {
            return NextResponse.json(
                { message: 'User already exist' },
                { status: 400 }
            )
        }
        await prismaClient.user.create({
            data: {
                email,
                password: hashPassword,
                name,
                lastName,
                birthday
            }
        })
        return NextResponse.json({ message: 'User created' }, { status: 201 })
    } catch (error) {
        console.error('Error in register route: ', error)
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        )
    }
}
