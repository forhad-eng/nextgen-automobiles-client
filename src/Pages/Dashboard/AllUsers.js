import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import axiosPrivate from '../../apis/axiosPrivate'
import Spinner from '../Shared/Spinner/Spinner'

const AllUsers = () => {
    const getUsers = async () => {
        const url = 'http://localhost:5000/user'
        const { data } = await axiosPrivate.get(url)
        return data
    }

    const { data: users, isLoading, refetch } = useQuery('users', getUsers)

    if (isLoading) {
        return <Spinner />
    }

    const makeAdminHandle = async email => {
        const url = `http://localhost:5000/user/${email}`
        const { data } = await axiosPrivate.patch(url)
        if (data.success) {
            refetch()
            toast.success(data.message)
        }
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr>
                            <th>{index}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => makeAdminHandle(user?.email)} className="btn btn-xs">
                                    Make Admin
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-xs">Remove User</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers
