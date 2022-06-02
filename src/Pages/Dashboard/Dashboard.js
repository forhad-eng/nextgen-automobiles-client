import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
    const [admin] = useAdmin()

    return (
        <div class="drawer drawer-mobile pt-20">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-4">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div class="drawer-side shadow">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {!admin && (
                        <>
                            <li>
                                <Link to="my-items">My Item</Link>
                            </li>
                            <li>
                                <Link to="all-cars">Buy one</Link>
                            </li>
                        </>
                    )}
                    {admin && (
                        <>
                            <li>
                                <Link to="all-users">All Users</Link>
                            </li>
                            <li>
                                <Link to="all-cars">Manage Orders</Link>
                            </li>
                            <li>
                                <Link to="manage-inventory">Manage Inventories</Link>
                            </li>
                            <li>
                                <Link to="add-item">Add To Stock</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard
