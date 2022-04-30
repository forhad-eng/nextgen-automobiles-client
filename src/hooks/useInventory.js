import axios from 'axios'
import { useEffect, useState } from 'react'

const useInventory = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const getCarInventory = async () => {
            const url = 'https://fierce-escarpment-98797.herokuapp.com/car'
            const { data } = await axios.get(url)
            setCars(data)
        }
        getCarInventory()
    }, [])

    return [cars, setCars]
}

export default useInventory
