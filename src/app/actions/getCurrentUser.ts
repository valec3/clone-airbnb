import { getServerSession } from 'next-auth'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/app/libs/prismadb'
import { get } from 'http'

export async function getSession() {
    return getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()
        if (!session) return null
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })
        if (!user) return null
        return user
    } catch (error) {
        console.error(error)
        return null
    }
}
