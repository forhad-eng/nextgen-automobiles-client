import { faBarsProgress, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ManageInventory = () => {
    return (
        <div className="inventory-container">
            <div className="inventory-nav bg-blue-200 leading-9">
                <NavLink
                    to="manageItem"
                    className={({ isActive }) => (isActive ? 'text-blue-600 text-lg block' : 'text-lg block')}
                >
                    <FontAwesomeIcon icon={faBarsProgress} className="mr-2" />
                    Manage Inventory
                </NavLink>
                <NavLink
                    to="addItem"
                    className={({ isActive }) => (isActive ? 'text-blue-600 text-lg block' : 'text-lg block')}
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Add New Item
                </NavLink>
            </div>
            <div className="inventory-items drop-shadow">
                <Outlet />
            </div>
        </div>
    )
}

export default ManageInventory
