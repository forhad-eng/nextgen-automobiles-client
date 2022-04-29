import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../Assets/logos/logo.png'

const Header = () => {
    return (
        <nav className="w-full flex justify-between items-center lg:px-16 lg:py-2 absolute">
            <img style={{ height: '60px' }} src={logo} alt="Automobiles" />
            <ul className="flex gap-6 text-lg">
                <li className="cursor-pointer">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        Home
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        Cars
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        About
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
