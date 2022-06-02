import axios from 'axios'
import { useEffect, useState } from 'react'

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const getToken = async () => {
            if (user) {
                const email = user?.email
                const name = user?.displayName
                const { data } = await axios.put('https://fierce-escarpment-98797.herokuapp.com/user', { email, name })
                if (data) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data)
                }
            }
        }
        getToken()
    }, [user])

    return [token]
}

export default useToken
