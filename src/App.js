import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './Pages/Home/Home'
import Inventory from './Pages/Inventory/Inventory'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import SignIn from './Pages/Login/SignIn/SignIn'
import SignUp from './Pages/Login/SignUp/SignUp'
import AddNewItem from './Pages/ManageInventory/AddNewItem/AddNewItem'
import ManageInventory from './Pages/ManageInventory/ManageInventory'
import ManageItem from './Pages/ManageInventory/ManageItem/ManageItem'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route
                    path="/inventory/:id"
                    element={
                        <RequireAuth>
                            <Inventory />
                        </RequireAuth>
                    }
                />
                <Route path="/manage" element={<ManageInventory />}>
                    <Route index element={<ManageItem/>} />
                    <Route path="manageItem" element={<ManageItem />} />
                    <Route path="addItem" element={<AddNewItem />} />
                </Route>
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App
