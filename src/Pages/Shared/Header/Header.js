import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../Assets/logos/logo.png'
import { auth } from '../../../Firebase/firebase.init'

const Header = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    const path = location.pathname

    return (
        <nav
            className={`w-full flex justify-between items-center lg:px-16 lg:py-2 absolute ${
                path === '/' ? '' : 'bg-blue-200'
            }`}
        >
            <Link to="/">
                <img style={{ height: '60px' }} src={logo} alt="Automobiles" />
            </Link>
            <ul className="flex gap-6 text-lg">
                <li className="cursor-pointer">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        Home
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink to="/all-cars" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        Cars In Stock
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink to="/my-items" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                        My Items
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    {user ? (
                        <button
                            onClick={() => signOut(auth)}
                            className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}
                        >
                            Sign out
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}
                        >
                            Sign in
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Header
