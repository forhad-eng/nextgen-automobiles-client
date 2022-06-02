import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import axiosPrivate from '../apis/axiosPrivate'
import { auth } from '../Firebase/firebase.init'

const useAdmin = () => {
    const [admin, setAdmin] = useState(false)
    const [user] = useAuthState(auth)

    useEffect(() => {
        const getAdmin = async () => {
            if (user) {
                const email = user.email
                const url = `http://localhost:5000/user/admin/${email}`
                const { data } = await axiosPrivate.get(url)
                setAdmin(data.admin)
            }
        }
        getAdmin()
    }, [user])

    return [admin]
}

export default useAdmin
