import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/app/components/navbar/Navbar'
import localFont from 'next/font/local'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
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
    title: 'Airbnb | Clone',
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
                <RegisterModal />
                <ToasterProvider />
                {children}
            </body>
        </html>
    )
}
