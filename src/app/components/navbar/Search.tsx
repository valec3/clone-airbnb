'use client'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="border-[1px] border-slate- w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-xl transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6 ">Anywhere</div>
                <div className="hidden md:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                    Any week
                </div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block">Add guests</div>
                    <div className="p-2 rounded-full text-white bg-primary">
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
