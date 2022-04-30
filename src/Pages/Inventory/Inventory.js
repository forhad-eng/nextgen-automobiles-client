import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../Styles/Inventory.css'

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

    const deliveredHandle = async () => {
        const proceed = window.confirm('Are you sure you want to deliver?')
        if (proceed) {
            let { _id, quantity, ...rest } = car
            quantity -= 1
            const updatedCar = { ...rest, quantity }
            const url = `http://localhost:5000/car/${id}`
            const { data } = await axios.put(url, updatedCar)
            if (data.acknowledged) {
                setCar(updatedCar)
            }
        }
    }

    const reStockHandle = async e => {
        e.preventDefault()
        const proceed = window.confirm('Are you sure you want to Restock?')
        if (proceed) {
            let { _id, quantity, ...rest } = car
            quantity = e.target.quantity.value
            if (!quantity) {
                return toast.error('Please enter a number')
            }
            const updatedCar = { ...rest, quantity }
            const url = `http://localhost:5000/car/${id}`
            const { data } = await axios.put(url, updatedCar)
            if (data.acknowledged) {
                setCar(updatedCar)
                e.target.reset()
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
                    onClick={deliveredHandle}
                    className="w-fit h-fit my-auto mx-auto bg-red-600 text-white rounded px-8 py-2"
                >
                    Delivered
                </button>
            </div>

            <div className="mt-6 flex justify-between pl-64">
                <form onSubmit={reStockHandle} className="restock w-7/12 px-4 pb-5">
                    <p className="text-3xl text-center py-5">Restock the item</p>
                    <input
                        className="inventory-input block w-4/5 mx-auto py-2 pl-3 rounded-full outline-none"
                        type="text"
                        name="quantity"
                        placeholder="Enter quantity"
                    />
                    <input
                        className="block w-1/2 mx-auto mt-5 bg-red-600 text-white rounded px-2 py-3"
                        type="submit"
                        value="Restock"
                    />
                </form>

                <div className="mt-40">
                    <Link className="bg-red-600 text-white rounded px-2 py-3" to="/">
                        <button>
                            Manage Inventories
                            <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Inventory
