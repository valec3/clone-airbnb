import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/app/components/navbar/Navbar'
import localFont from 'next/font/local'
import Modal from './components/modals/Modal'
// const font = Nunito({ subsets: ['latin'] })
const font = localFont({
    src: [
        {
            path: '../assets/fonts/AirbnbCereal_W_XBd.otf',
            style: 'normal',
            weight: '900'
        },
        {
            path: '../assets/fonts/AirbnbCereal_W_Bd.otf',
            style: 'normal',
            weight: '700'
        },
        {
            path: '../assets/fonts/AirbnbCereal_W_Md.otf',
            style: 'normal',
            weight: '500'
        },
        {
            path: '../assets/fonts/AirbnbCereal_W_Lt.otf',
            style: 'normal',
            weight: '300'
        }
    ]
})
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
                <Modal
                    isOpen
                    title="Iniciar sesión o registrarse"
                    actionLabel="Continúa"
                />
                {children}
            </body>
        </html>
    )
}
