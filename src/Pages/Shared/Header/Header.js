import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ParamContext } from '../../../App'
import logo from '../../../Assets/logos/logo.png'
import { auth } from '../../../Firebase/firebase.init'
import '../../../Styles/Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const path = location.pathname
    let displayStatus

    const { id } = useContext(ParamContext)

    if (
        path === '/' ||
        path === '/all-cars' ||
        path === '/my-items' ||
        path === '/login' ||
        path === '/register' ||
        path === '/blogs' ||
        path === '/about' ||
        path === `/inventory/${id}` ||
        path === '/manage' ||
        path === `/manage/manage-item` ||
        path === `/manage/add-item`
    ) {
        displayStatus = true
    } else {
        displayStatus = false
    }

    const singOutHandle = () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <nav className={`${displayStatus || 'hidden'}`}>
            <div
                className={`w-full flex justify-between items-center px-4 py-4 md:py-3 lg:px-16 absolute ${
                    path === '/' ? '' : 'bg-blue-100'
                }`}
            >
                <Link to="/">
                    <img className="navbar-logo" src={logo} alt="Automobiles" />
                </Link>

                <div onClick={() => setOpen(!open)} className="block md:hidden w-6 h-6 text-xl">
                    {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>

                <ul
                    className={`md:flex items-center gap-2 md:gap-5 text-lg md:static absolute left-0 transition-all  duration-75 ${
                        open ? 'top-14 flex flex-col bg-blue-200 w-full p-3 z-10' : '-top-[800px]'
                    }`}
                >
                    <li className="cursor-pointer">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}>
                            Home
                        </NavLink>
                    </li>

                    <li className="cursor-pointer">
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}
                        >
                            Blogs
                        </NavLink>
                    </li>

                    {user ? (
                        ''
                    ) : (
                        <li className="cursor-pointer">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}
                            >
                                About
                            </NavLink>
                        </li>
                    )}
                    {user && (
                        <li className="cursor-pointer">
                            <NavLink
                                to="/all-cars"
                                className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}
                            >
                                Cars In Stock
                            </NavLink>
                        </li>
                    )}
                    {user && (
                        <li className="cursor-pointer">
                            <NavLink
                                to="/my-items"
                                className={({ isActive }) => (isActive ? 'text-red-600' : 'text-gray-800')}
                            >
                                My Items
                            </NavLink>
                        </li>
                    )}
                    <li className="cursor-pointer">
                        {user ? (
                            <button onClick={singOutHandle} className="bg-[#ff0000] text-white rounded px-3 py-1">
                                Sign out
                            </button>
                        ) : (
                            <NavLink to="/login">
                                <button className="bg-[#ff0000] text-white rounded px-3 py-1">Sign in</button>
                            </NavLink>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
