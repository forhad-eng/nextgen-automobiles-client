import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useInventory from '../../hooks/useInventory'
import '../../Styles/ManageInventory.css'

const ManageInventory = () => {
    const [cars] = useInventory()

    return (
        <div className="inventory-container">
            <div className="inventory-nav">
                <NavLink
                    to="/manage"
                    className={({ isActive }) => (isActive ? 'text-blue-600 text-xl block' : 'text-xl block')}
                >
                    Manage Inventory
                </NavLink>
                <NavLink
                    to="/add"
                    className={`text-xl ${({ isActive }) =>
                        isActive ? 'text-blue-600 text-xl block' : 'text-xl block'}`}
                >
                    Add New Item
                </NavLink>
            </div>
            <div className="inventory-items">
                <div>
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
                                const { name, price, quantity, description } = car
                                return (
                                    <tr className="bg-white">
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        <td>{description}</td>
                                        <button className="inline-block ">
                                            <FontAwesomeIcon
                                                icon={faTrashAlt}
                                                className="h-5 w-5 ml-4 mt-2 p-3 rounded-full bg-red-300 text-red-600"
                                            />
                                        </button>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageInventory
