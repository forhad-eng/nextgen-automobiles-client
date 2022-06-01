import AOS from 'aos'
import 'aos/dist/aos.css'
import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AboutUs from './Pages/Home/AboutUs/AboutUs'
import Blogs from './Pages/Home/Blogs/Blogs'
import CarsInStock from './Pages/Home/CarsInStock/CarsInStock'
import Home from './Pages/Home/Home'
import MyItems from './Pages/Home/MyItems/MyItems'
import Inventory from './Pages/Inventory/Inventory'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import SignIn from './Pages/Login/SignIn/SignIn'
import SignUp from './Pages/Login/SignUp/SignUp'
import AddInventory from './Pages/ManageInventory/AddInventory/AddInventory'
import ManageInventory from './Pages/ManageInventory/ManageInventory'
import ManageItem from './Pages/ManageInventory/ManageItem/ManageItem'
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
                    <Route path="/my-items" element={<MyItems />} />
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
                    <Route path="/manage" element={<ManageInventory />}>
                        <Route index element={<ManageItem />} />
                        <Route path="manage-item" element={<ManageItem />} />
                        <Route path="add-item" element={<AddInventory />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </ParamContext.Provider>
            <ToastContainer />
        </div>
    )
}

export default App
