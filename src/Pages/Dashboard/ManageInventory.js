import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useInventory from '../../hooks/useInventory'
import '../../Styles/ManageInventory.css'
import ConfirmBox from '../Shared/ConfirmBox/ConfirmBox'
import Spinner from '../Shared/Spinner/Spinner'

const ManageInventory = () => {
    const [cars, setCars] = useInventory()

    const inventoryDeleteHandle = _id => {
        const deleteSingleInventory = async () => {
            const url = `https://fierce-escarpment-98797.herokuapp.com/car/${_id}`
            const { data } = await axios.delete(url)
            if (data.acknowledged) {
                const remainingCars = cars.filter(car => car._id !== _id)
                setCars(remainingCars)
                toast.success('Deleted')
            }
        }

        ConfirmBox(deleteSingleInventory, 'You want to delete?')
    }

    return (
        <>
            {cars.length === 0 ? (
                <div className="h-5/6 flex items-center">
                    <Spinner />
                </div>
            ) : (
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Action</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cars?.map(car => {
                                const { name, price, quantity, description, _id } = car
                                return (
                                    <tr key={_id} className="bg-white">
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        <td>
                                            <Link className="btn btn-sm" to={`/inventory/${_id}`}>
                                                Stock Update
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => inventoryDeleteHandle(_id)}>
                                                <FontAwesomeIcon
                                                    icon={faTrashAlt}
                                                    className="h-5 w-5 ml-4 mt-2 p-3 rounded-full bg-red-200 text-red-600"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default ManageInventory
