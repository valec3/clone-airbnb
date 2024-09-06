'use client'
import { IconType } from 'react-icons'

interface ButtonProps {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    outline = false,
    small = false,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`relative flex items-center justify-center px-4 py-2  border-[1px] disabled:opacity-70 disabled:cursor-not-allowed w-full rounded-lg ${
                small
                    ? 'text-sm py-1 font-light border-[1px]'
                    : 'text-base py-3 font-medium border-2'
            } ${
                outline
                    ? 'text-black bg-white border-black hover:bg-neutral-100'
                    : 'text-white bg-primary-900 border-primary-900'
            }`}
        >
            {Icon && (
                <Icon
                    className="absolute left-4 top-[50%] transform -translate-y-1/2"
                    size={24}
                />
            )}
            {label}
        </button>
    )
}
export default Button
