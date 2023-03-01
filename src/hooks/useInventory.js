import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventory = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCarInventory = async () => {
            const url = 'https://nextgen-automobiles-server.vercel.app/car'
            const { data } = await axios.get(url)
            setCars(data)
            setLoading(false)
        }
        getCarInventory()
    }, [])

    return [cars, setCars, loading]
}

export default useInventory
