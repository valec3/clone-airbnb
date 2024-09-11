import URL_API from './api.config'
class AuthController {
    register = async (user) => {
        try {
            const response = await fetch(`${URL_API}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                throw new Error('Error registering user')
            }
            return await response.json()
        } catch (error) {
            console.error('Error registering user:', error)
            return null
        }
    }
    login = async (user) => {
        try {
            const response = await fetch(`${URL_API}/authenticate/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        } catch (error) {
            console.error('Error logging in user:', error)
            return null
        }
    }
}
const authController = new AuthController()

export default authController
