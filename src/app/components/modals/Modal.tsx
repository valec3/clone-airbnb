'use client'

import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../Button'

interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title: string
    body?: React.ReactNode
    footer?: React.ReactNode
    actionLabel?: string
    disabled?: boolean
    secundaryAction?: () => void
    secundaryActionLabel?: string
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel = 'Save',
    disabled = false,
    secundaryAction,
    secundaryActionLabel = 'Cancel'
}) => {
    const [showModal, setShowModal] = useState(isOpen)
    const handleClose = useCallback(() => {
        if (disabled) return
        setShowModal(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose])
    const handleSubmit = useCallback(() => {
        if (disabled) return
        setShowModal(false)
        setTimeout(() => {
            onSubmit()
        }, 300)
    }, [disabled, onSubmit])
    const handleSecundaryAction = useCallback(() => {
        if (disabled || !secundaryAction) return
        setShowModal(false)
        setTimeout(() => {
            secundaryAction()
        }, 300)
    }, [disabled, secundaryAction])
    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])
    console.log('isOpen in GENERIC MODAL: ', isOpen)
    if (!isOpen) return null
    if (isOpen) {
        document.body.style.overflow = 'hidden'
        console.log('NO SCROLL')
    }
    return (
        <div
            className="fixed inset-0 z-50 outline-none bg-neutral-800/50 flex justify-center items-center overflow-x-hidden
    overflow-y-auto"
        >
            <div
                className={`w-full md:w-4/5 lg:w-1/2 xl:w-2/5 my-6 mx-auto h-full md:max-h-[95%] md:h-auto bg-white md:rounded-xl overflow-hidden translate duration-300 ${
                    showModal ? 'translate-y-0' : 'translate-y-full'
                } ${showModal ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="border-0 shadow-lg relative flex flex-col  outline-none text-black">
                    <header className="flex items-center px-6 py-5 justify-center border-[1px] border-[#dddddd]">
                        <button
                            className="p-1 border-0 hover:opacity-70 transition absolute left-5"
                            onClick={handleClose}
                        >
                            <IoMdClose size={20} />
                        </button>
                        <h3 className="text-lg font-semibold text-center">
                            <span>{title}</span>
                        </h3>
                    </header>
                    <div className="max-h-[81vh] overflow-y-auto p-6">
                        <div className="flex flex-auto ">
                            {body && <>{body}</>}
                        </div>
                        <div className="flex items-center justify-center py-6 border-b border-[#dddddd] gap-4">
                            <Button
                                disabled={disabled}
                                label={actionLabel}
                                onClick={handleSubmit}
                            />
                            {secundaryAction && (
                                <Button
                                    disabled={disabled}
                                    label={secundaryActionLabel}
                                    onClick={handleSecundaryAction}
                                    outline
                                />
                            )}
                        </div>
                        <footer>{footer}</footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
