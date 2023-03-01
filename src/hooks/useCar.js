import axios from 'axios'
import { useEffect, useState } from 'react'

const useCar = id => {
    const [car, setCar] = useState({})

    useEffect(() => {
        const getSelectedCar = async () => {
            const url = `https://nextgen-automobiles-server.vercel.app/car/${id}`
            const { data } = await axios.get(url)
            setCar(data)
        }
        getSelectedCar()
    }, [id])

    return [car, setCar]
}

export default useCar
