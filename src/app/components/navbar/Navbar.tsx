import Container from '@/app/components/Container'
import Image from 'next/image'
import { Logo } from '@/app/components/navbar/Logo'
import Search from '@/app/components/navbar/Search'
import UserMenu from './UserMenu'
export const Navbar = () => {
    return (
        <header className="fixed w-full bg-white z-50 shadow-lg text-black">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <nav className="flex flex-row justify-between gap-4 md:gap-0 items-center">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </nav>
                </Container>
            </div>
        </header>
    )
}
