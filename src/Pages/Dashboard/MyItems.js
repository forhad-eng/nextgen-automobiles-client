import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosPrivate from '../../apis/axiosPrivate'
import { auth } from '../../Firebase/firebase.init'
import ConfirmBox from '../Shared/ConfirmBox/ConfirmBox'
import Spinner from '../Shared/Spinner/Spinner'

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

    const itemDeleteHandle = _id => {
        const deleteTheItem = async () => {
            const url = `https://fierce-escarpment-98797.herokuapp.com/sell/${_id}`
            const { data } = await axios.delete(url)
            if (data.acknowledged) {
                const remainingItems = items.filter(item => item._id !== _id)
                setItems(remainingItems)
                toast.success('Deleted', { toastId: 'dltSuccess' })
            }
        }

        ConfirmBox(deleteTheItem, 'You want to delete?')
    }

    return (
        <div className="">
            <div className="drop-shadow">
                {showSpinner ? (
                    <div className="h-5/6 flex items-center">
                        <Spinner />
                    </div>
                ) : (
                    <table class="table w-full">
                        <thead>
                            <tr>
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
