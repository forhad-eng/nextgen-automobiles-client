import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useQuery } from 'react-query'
import axiosPrivate from '../../apis/axiosPrivate'
import Spinner from '../Shared/Spinner/Spinner'

const ManageOrders = () => {
    const getAllOrders = async () => {
        const url = 'https://fierce-escarpment-98797.herokuapp.com/sell'
        const { data } = await axiosPrivate(url)
        return data
    }

    const { data, isLoading } = useQuery('all-orders', getAllOrders)

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            {' '}
            <table class="table w-full">
                <thead>
                    <tr>
                        <td>User</td>
                        <td>Item</td>
                        <td>Amount</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && (
                        <p className="text-3xl text-red-600 absolute left-[40%] top-48">No Item Found!</p>
                    )}

                    {data?.map(item => {
                        const { email, name, price, _id } = item
                        return (
                            <tr key={_id} className="bg-white">
                                <td>{email}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <button>
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
        </div>
    )
}

export default ManageOrders
