import Image from 'next/image'
import React from 'react'

const Avatar = () => {
    return (
        <Image
            src="/images/placeholder-avatar.svg"
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full text-[#6a6a6a]"
        />
    )
}

export default Avatar
