import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../Assets/logos/logo.png'
import { auth } from '../../../Firebase/firebase.init'

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <nav className="w-full flex justify-between items-center lg:px-16 lg:py-2 absolute">
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
