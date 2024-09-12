import Container from '@/app/components/Container'
import Image from 'next/image'
import { Logo } from '@/app/components/navbar/Logo'
import Search from '@/app/components/navbar/Search'
import UserMenu from './UserMenu'
import { User } from '@prisma/client'

interface NavbarProps {
    currentUser?: User | null
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <header className="fixed w-full h-[80px] bg-white z-50  text-black border-b-[1px] flex items-center">
            <Container>
                <nav className="flex flex-row justify-between gap-4 md:gap-0 items-center">
                    <Logo />
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </nav>
            </Container>
        </header>
    )
}
