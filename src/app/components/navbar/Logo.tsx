'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Logo = () => {
    const router = useRouter()
    return (
        <Image
            src="/images/Airbnb_Logo.png"
            className="hidden md:block cursor-pointer"
            alt="logo"
            width={100}
            height={100}
            onClick={() => router.push('/')}
        />
    )
}
