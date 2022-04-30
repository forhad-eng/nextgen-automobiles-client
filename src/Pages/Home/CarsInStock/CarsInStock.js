import axios from 'axios'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import { auth } from '../../../Firebase/firebase.init'
import useInventory from '../../../hooks/useInventory'
import CarDetails from '../CarDetails/CarDetails'

const CarsInStock = () => {
    const [cars] = useInventory()
    const [user] = useAuthState(auth)

    const buyOneHandle = async car => {
        const email = user?.email
        const { name, price, supplier } = car
        const soldItem = { email, name, price, supplier }

        const url = 'https://fierce-escarpment-98797.herokuapp.com/sell'
        const { data } = await axios.post(url, soldItem)
        if (data.acknowledged) {
            toast(`${name} is added to My Items`)
        }
    }

    return (
        <div className="grid grid-cols-3 gap-5 mb-10 pt-28 px-20 ">
            {cars.map(car => (
                <CarDetails car={car}>
                    <button onClick={() => buyOneHandle(car)} className="bg-red-600 text-white rounded px-2 py-1">
                        Add Item
                    </button>
                </CarDetails>
            ))}
        </div>
    )
}

export default CarsInStock
