'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { BiWorld } from 'react-icons/bi'

const UserMenu = () => {
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-bold py-3 px-4 hover:bg-neutral-150 transition cursor-pointer">
                    Pon tu espacio en Airbnb
                </div>
                <BiWorld size={20} className="text-neutral-500" />
                <div className="p-4 md:py-1 md:px-3 border-[1px] border-neutral-300 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu size={18} />
                    <button className="hidden md:block">
                        <Avatar />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserMenu
