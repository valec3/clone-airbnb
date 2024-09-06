'use client'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'
import { lazy, useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import authController from '@/app/services/auth.service'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import toast from 'react-hot-toast'
import { devNull } from 'os'
import Button from '../Button'
const RegisterModal = () => {
    const { isOpen, openModal, closeModal } = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            lastName: '',
            birthday: ''
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        data.birthday = new Date(data.birthday).toISOString()

        const response = await authController.register(data)
        console.log('response: ', response)
        if (response.status !== 201) {
            toast.error('Error al registrar usuario')
            setIsLoading(false)
            closeModal()
            return
        }
        toast.success('Usuario registrado correctamente')
        setIsLoading(false)
        closeModal()
    }

    const bodyContent = (
        <div className="flex flex-col gap-2 items-start w-full ">
            <Heading title="Te damos la bienvenida a Airbnb" />
            <h3>Nombre completo</h3>
            <Input
                id="name"
                label="Nombre que aparece en el documento de identidad"
                placeholder="Ingresa tu nombre"
                register={register}
                errors={errors}
                required
            />
            <Input
                id="lastName"
                label="Apellidos que aparecen en el documento de identidad"
                placeholder="Ingresa tu apellido"
                register={register}
                errors={errors}
                required
            />
            <h3>Fecha de nacimiento</h3>
            <Input
                id="birthday"
                type="date"
                label="Fecha de nacimiento"
                placeholder="Ingresa tu fecha de nacimiento"
                register={register}
                errors={errors}
                required
            />
            <p className="font-light text-sm text-neutral-500 pb-2">
                Para poder registrarte debes tener al menos 18 años. No
                compartiremos la fecha de tu nacimiento con otros usuarios de
                Airbnb.
            </p>
            <h3>Información de contacto</h3>
            <Input
                id="email"
                label="Correo electrónico"
                placeholder="Ingresa tu correo electrónico"
                register={register}
                errors={errors}
                required
            />
            <p className="font-light text-sm text-neutral-500 pb-2">
                Te enviaremos las confirmaciones de viaje y los recibos por
                correo electrónico.
            </p>
            <Input
                id="password"
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                type="password"
                register={register}
                errors={errors}
                required
            />
            <p className="font-light text-sm text-neutral-500">
                Al seleccionar{' '}
                <span className="font-bold">Aceptar y continuar</span>,acepto
                los Términos de servicio, los Terminos de pagos del servicio y
                la Politica contra la discriminación de Airbnb. Tambien
                reconozco la Politica de privacidad.
            </p>
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <div className="flex flex-col gap-4">
                <Button
                    label="Registrarse con Google"
                    icon={FcGoogle}
                    onClick={() => devNull}
                    outline
                />
                <Button
                    label="Registrarse con GitHub"
                    icon={AiFillGithub}
                    onClick={() => devNull}
                    outline
                />
                <Button
                    label="Registrarse con Facebook"
                    icon={FaFacebook}
                    onClick={() => devNull}
                    outline
                />
            </div>
            <p className="text-center font-light">
                Ya tienes una cuenta?{' '}
                <span
                    className="text-primary-700 cursor-pointer"
                    onClick={closeModal}
                >
                    Inicia sesión
                </span>
            </p>
        </div>
    )
    console.log('isOpen in REGISTER MODAL: ', isOpen)
    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            title="Iniciar sesión o registrarse"
            disabled={isLoading}
            actionLabel="Aceptar y continuar"
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
