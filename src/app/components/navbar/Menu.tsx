import MenuItem from './MenuItem'
import { useRouter } from 'next/navigation'
const Menu = () => {
    const router = useRouter()
    const handleRegister = () => {
        router.push('/register')
    }
    return (
        <div className="flex flex-col gap-2 absolute top-14 right-0 w-64 bg-white border-[1px] border-neutral-300 shadow-lg rounded-lg py-2">
            <MenuItem label="Regístrate" onClick={handleRegister} />
            <MenuItem label="Iniciar sesión" onClick={() => {}} />
            <hr className="border-neutral-300" />
            <MenuItem label="Pon tu espacio en Airbnb" onClick={() => {}} />
            <MenuItem label="Centro de ayuda" onClick={() => {}} />
        </div>
    )
}

export default Menu
