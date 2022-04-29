import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './Pages/Home/Home'
import SignIn from './Pages/Login/SignIn/SignIn'
import SignUp from './Pages/Login/SignUp/SignUp'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App
