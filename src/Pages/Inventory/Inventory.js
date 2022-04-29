import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Inventory = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        const getSelectedCar = async () => {
            const url = `http://localhost:5000/car/${id}`
            const { data } = await axios.get(url)
            setCar(data)
        }
        getSelectedCar()
    }, [])

    const deliveredHandle = async itemId => {
        const proceed = window.confirm('Are you sure you want to deliver?')
        if (proceed) {
            let { name, image, price, quantity, description, supplier } = car
            quantity -= 1
            const updatedCar = { id: itemId, name, image, price, quantity, description, supplier }
            const url = `http://localhost:5000/car/${itemId}`
            const { data } = await axios.put(url, updatedCar)
            if (data.acknowledged) {
                setCar(updatedCar)
            }
        }
    }

    return (
        <div className="pt-24 px-20">
            <div className="grid grid-cols-3 gap-10 p-4 shadow rounded-lg text-gray-500 leading-8">
                <img src={car.image} alt="" />
                <div>
                    <p className="text-3xl text-red-600">{car.name}</p>
                    <p>{car.description}</p>
                    <p>
                        Price: <span className="text-orange-500">${car.price}</span>
                    </p>
                    <p>
                        In Stock: <span className="text-orange-500">{car.quantity} items</span>
                    </p>
                    <p>Supplier: {car.supplier}</p>
                </div>
                <button
                    onClick={() => deliveredHandle(id)}
                    className="w-fit h-fit my-auto mx-auto bg-red-600 text-white rounded px-8 py-2"
                >
                    Delivered
                </button>
            </div>
        </div>
    )
}

export default Inventory
