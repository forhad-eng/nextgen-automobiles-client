import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventory = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const getCarInventory = async () => {
            const url = 'http://localhost:5000/car'
            const { data } = await axios.get(url)
            setCars(data)
        }
        getCarInventory()
    }, [])

    return [cars, setCars]
}

export default useInventory
