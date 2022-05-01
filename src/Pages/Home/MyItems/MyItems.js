import { faBarsProgress, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosPrivate from '../../../apis/axiosPrivate'
import { auth } from '../../../Firebase/firebase.init'
import Spinner from '../../Shared/Spinner/Spinner'

const MyItems = () => {
    const [items, setItems] = useState([])
    const [user] = useAuthState(auth)
    const [showSpinner, setShowSpinner] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const email = user?.email
        if (email) {
            const getItems = async () => {
                try {
                    const url = `https://fierce-escarpment-98797.herokuapp.com/sell?email=${email}`
                    const { data } = await axiosPrivate.get(url)
                    setItems(data)
                    setShowSpinner(!showSpinner)
                } catch (error) {
                    if (error.response.status === 401 || error.response.status === 403) {
                        await signOut(auth)
                        navigate('/login')
                    }
                }
            }
            getItems()
        }
    }, [user])

    const itemDeleteHandle = async _id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `https://fierce-escarpment-98797.herokuapp.com/sell/${_id}`
            const { data } = await axios.delete(url)
            if (data.acknowledged) {
                const remainingItems = items.filter(item => item._id !== _id)
                setItems(remainingItems)
                toast.success('Deleted', { toastId: 'dltSuccess' })
            }
        }
    }

    return (
        <div className="inventory-container">
            <div className="inventory-nav bg-blue-100 leading-9">
                <NavLink
                    to="/my-items"
                    className={({ isActive }) => (isActive ? 'text-blue-600 lg:text-lg block' : 'lg:text-lg block')}
                >
                    <FontAwesomeIcon icon={faBarsProgress} className="mr-2" />
                    <p className="hidden md:inline-block">Manage My Items</p>
                </NavLink>
                <NavLink
                    to="/all-cars"
                    className={({ isActive }) => (isActive ? 'text-blue-600 lg:text-lg block' : 'lg:text-lg block')}
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    <p className="hidden md:inline-block">Add Item</p>
                </NavLink>
            </div>
            <div className="inventory-items drop-shadow">
                {showSpinner ? (
                    <div className="h-5/6 flex items-center">
                        <Spinner />
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr className="bg-blue-700 text-white">
                                <td>Name</td>
                                <td>Price</td>
                                <td>Supplier</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length === 0 && (
                                <p className="text-3xl text-red-600 absolute left-[40%] top-48">No Item Found!</p>
                            )}

                            {items.map(item => {
                                const { name, price, supplier, _id } = item
                                return (
                                    <tr key={_id} className="bg-white">
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{supplier}</td>
                                        <button onClick={() => itemDeleteHandle(_id)}>
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
                )}
            </div>
        </div>
    )
}

export default MyItems
