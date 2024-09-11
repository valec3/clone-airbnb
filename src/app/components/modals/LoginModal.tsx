'use client'
import toast from 'react-hot-toast'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../inputs/Input'
import Modal from './Modal'
import useLoginModal from '@/app/hooks/useLoginModal'
import authController from '@/app/services/auth.service'
import Heading from '../Heading'
import { devNull } from 'os'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const LoginModal = () => {
    const router = useRouter()
    const { isOpen, openModal, closeModal } = useLoginModal()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((response) => {
            setIsLoading(false)
            if (response?.error) {
                toast.error('Usuario o contraseña incorrectos')
                closeModal()
            } else {
                toast.success('Inicio de sesión exitoso')
                closeModal()
                router.refresh()
            }
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-2 items-start w-full ">
            <Heading title="Te damos la bienvenida a Airbnb" />

            <Input
                id="email"
                label="Email"
                placeholder="Ingresa tu email"
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                type="password"
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <div className="flex flex-col gap-4">
                <Button
                    label="Inicia sesión con Google"
                    icon={FcGoogle}
                    onClick={() => devNull}
                    outline
                />
                <Button
                    label="Inicia sesión con GitHub"
                    icon={AiFillGithub}
                    onClick={() => devNull}
                    outline
                />
                <Button
                    label="Inicia sesión con Facebook"
                    icon={FaFacebook}
                    onClick={() => devNull}
                    outline
                />
            </div>
            <p className="text-center font-light">
                ¿No tienes cuenta?{' '}
                <button
                    className="text-primary-700 cursor-pointer"
                    onClick={closeModal}
                >
                    Regístrate
                </button>
            </p>
        </div>
    )
    console.log('isOpen in REGISTER MODAL: ', isOpen)
    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            title="Iniciar sesión"
            disabled={isLoading}
            actionLabel="Aceptar y continuar"
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
