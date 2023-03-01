import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ParamContext } from '../../App'
import useCar from '../../hooks/useCar'
import '../../Styles/Inventory.css'
import ConfirmBox from '../Shared/ConfirmBox/ConfirmBox'

const Inventory = () => {
    const { id } = useParams()
    const { setId } = useContext(ParamContext)
    setId(id)
    const [car, setCar] = useCar(id)

    const deliveredHandle = () => {
        const deliverTheCar = async () => {
            let { _id, quantity, ...rest } = car
            quantity -= 1
            const updatedCar = { ...rest, quantity }
            const url = `https://nextgen-automobiles-server.vercel.app/car/${id}`
            const { data } = await axios.put(url, updatedCar)
            if (data.acknowledged) {
                setCar(updatedCar)
            }
        }

        ConfirmBox(deliverTheCar, 'You want to deliver?')
    }

    const reStockHandle = e => {
        e.preventDefault()

        const restockTheItem = async () => {
            let { _id, quantity, ...rest } = car
            quantity = e.target.quantity.value
            if (!quantity) {
                return toast.error('Please enter a number')
            }
            const updatedCar = { ...rest, quantity }
            const url = `https://nextgen-automobiles-server.vercel.app/car/${id}`
            const { data } = await axios.put(url, updatedCar)
            if (data.acknowledged) {
                setCar(updatedCar)
                e.target.reset()
            }
        }

        ConfirmBox(restockTheItem, 'You want to restock?')
    }

    return (
        <div className="mb-20 pt-24 px-3 md:px-6 lg:px-20">
            <div className="grid md:grid-cols-3 gap-4 lg:gap-10 p-4 shadow rounded-lg text-gray-500 leading-8">
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
                    className="w-fit h-fit my-auto mx-auto bg-red-600 text-white rounded px-6 py-1 md:px-8 md:py-2"
                >
                    Delivered
                </button>
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-between md:pl-20 lg:pl-64">
                <form onSubmit={reStockHandle} className="restock md:w-7/12 px-4 pb-5">
                    <p className="text-3xl text-center py-5">Restock the item</p>
                    <input
                        className="inventory-input block w-4/5 mx-auto py-2 pl-3 rounded-full outline-none"
                        type="text"
                        name="quantity"
                        placeholder="Enter quantity"
                    />
                    <input
                        className="block w-1/2 mx-auto mt-5 bg-red-600 text-white rounded px-2 py-2 md:py-3"
                        type="submit"
                        value="Restock"
                    />
                </form>

                <div className="mt-14 md:mt-40 ml-auto">
                    <Link to="/dashboard/manage-inventory">
                        <button className="px-3 py-2 bg-blue-500 text-white rounded outline-none">
                            Back To Inventories
                            <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Inventory
