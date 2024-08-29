'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface InputProps {
    id: string
    label: string
    type?: string
    placeholder: string
    disabled?: boolean
    formatPrice?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}
const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    placeholder,
    disabled = false,
    formatPrice = false,
    required = false,
    register,
    errors
}) => {
    return (
        <div className="flex flex-col gap-1 w-full relative">
            {formatPrice && (
                <BiDollar
                    size={20}
                    className="text-neutral-500 absolute top-5 left-2"
                />
            )}
            <input
                type={type}
                id={id}
                placeholder=" "
                disabled={disabled}
                {...register(id, { required })}
                className={`peer w-full p-4 pt-5 font-light bg-transparent border-2 rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed z-20 ${
                    formatPrice ? 'pl-10' : 'pl-4'
                } ${errors[id] ? 'border-red-500' : 'border-gray-300'}`}
            />
            <label
                // htmlFor={id}
                className={`absolute text-xs text-zinc-400 duration-150 transform left-4 top-2 z-10 ${
                    formatPrice ? 'left-10' : 'left-4'
                } peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-6 peer-focus:text-xs peer-focus:top-2 ${
                    errors[id] ? 'text-red-500' : 'text-zinc-400'
                }`}
            >
                {label}
            </label>
        </div>
    )
}

export default Input
