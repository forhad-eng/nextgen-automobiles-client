import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import useInventory from '../../../hooks/useInventory'
import '../../../Styles/ManageInventory.css'

const ManageItem = () => {
    const [cars, setCars] = useInventory()

    const inventoryDeleteHandle = async _id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `https://fierce-escarpment-98797.herokuapp.com/car/${_id}`
            const { data } = await axios.delete(url)
            if (data.acknowledged) {
                const remainingCars = cars.filter(car => car._id !== _id)
                setCars(remainingCars)
                toast.success('Deleted')
            }
        }
    }

    return (
        <table>
            <thead>
                <tr className="bg-blue-700 text-white">
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Description</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => {
                    const { name, price, quantity, description, _id } = car
                    return (
                        <tr key={_id} className="bg-white">
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>{description}</td>
                            <button onClick={() => inventoryDeleteHandle(_id)}>
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className="h-5 w-5 ml-4 mt-2 p-3 rounded-full bg-red-200 text-red-600"
                                />
                            </button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ManageItem
