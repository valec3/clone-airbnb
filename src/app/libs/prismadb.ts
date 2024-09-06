import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
// Verifica se estamos en el ambiente de producción para no sobrescribir la variable global
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client
