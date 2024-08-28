// 'use client'

import React from 'react'

interface MenuItemProps {
    onClick: () => void
    label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
    return (
        <button
            className="w-full px-4 py-3 hover:bg-neutral-100 transition font-medium text-neutral-800 text-sm text-left"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default MenuItem
