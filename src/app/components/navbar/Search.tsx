'use client'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="md:flex-shrink-[1] border-[1px] border-slate- w-full md:w-auto py-2 pl-2 rounded-full drop-shadow-sm shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-medium px-4 ">
                    En cualquier lugar del mundo
                </div>
                <div className="hidden md:block text-sm font-medium px-4 border-x-[1px] flex-1 text-center">
                    Cualquier semana
                </div>
                <div className="text-sm pl-4 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block font-light">¿Cuántos?</div>
                    <div className="p-2 rounded-full text-white bg-primary-700">
                        <BiSearch size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
