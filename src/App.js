import AOS from 'aos'
import 'aos/dist/aos.css'
import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddInventory from './Pages/Dashboard/AddInventory'
import AllUsers from './Pages/Dashboard/AllUsers'
import Dashboard from './Pages/Dashboard/Dashboard'
import ManageInventory from './Pages/Dashboard/ManageInventory'
import ManageOrders from './Pages/Dashboard/ManageOrders'
import MyItems from './Pages/Dashboard/MyItems'
import AboutUs from './Pages/Home/AboutUs/AboutUs'
import Blogs from './Pages/Home/Blogs/Blogs'
import CarsInStock from './Pages/Home/CarsInStock/CarsInStock'
import Home from './Pages/Home/Home'
import Inventory from './Pages/Inventory/Inventory'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import SignIn from './Pages/Login/SignIn/SignIn'
import SignUp from './Pages/Login/SignUp/SignUp'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'

export const ParamContext = createContext() //inventoryID parameter context for conditional rendering of header/footer

function App() {
    const [id, setId] = useState('')

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <ParamContext.Provider value={{ id, setId }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all-cars" element={<CarsInStock />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<MyItems />} />
                        <Route path="my-items" element={<MyItems />} />
                        <Route path="all-cars" element={<CarsInStock />} />
                        <Route path="all-users" element={<AllUsers />} />
                        <Route path="manage-orders" element={<ManageOrders />} />
                        <Route path="manage-inventory" element={<ManageInventory />} />
                        <Route path="add-item" element={<AddInventory />} />
                    </Route>
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route
                        path="/inventory/:id"
                        element={
                            <RequireAuth>
                                <Inventory />
                            </RequireAuth>
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </ParamContext.Provider>
            <ToastContainer />
        </div>
    )
}

export default App
