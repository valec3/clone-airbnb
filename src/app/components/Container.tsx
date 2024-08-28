'use client'
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[2520px] w-full mx-auto px-4 sm:px-2 md:px-10 xl:px-20">
            {children}
        </div>
    )
}

export default Container
