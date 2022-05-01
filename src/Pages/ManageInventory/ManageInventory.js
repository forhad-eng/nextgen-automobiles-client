import { faBarsProgress, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ManageInventory = () => {
    return (
        <div className="inventory-container">
            <div className="inventory-nav bg-blue-100 md:leading-9">
                <NavLink
                    to="manage-item"
                    className={({ isActive }) => (isActive ? 'text-blue-600 lg:text-lg block' : 'lg:text-lg block')}
                >
                    <FontAwesomeIcon icon={faBarsProgress} className="mr-2" />
                    <p className="hidden md:inline-block">Manage Inventory</p>
                </NavLink>
                <NavLink
                    to="add-item"
                    className={({ isActive }) => (isActive ? 'text-blue-600 lg:text-lg block' : 'lg:text-lg block')}
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    <p className="hidden md:inline-block">Add New Item</p>
                </NavLink>
            </div>
            <div className="inventory-items drop-shadow">
                <Outlet />
            </div>
        </div>
    )
}

export default ManageInventory
