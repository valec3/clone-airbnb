import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/app/components/navbar/Navbar'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Airbnb',
    description:
        'Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
