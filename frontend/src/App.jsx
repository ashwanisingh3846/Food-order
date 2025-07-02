import React from 'react'
import './App.css'
import { Routes  , Route } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import Order from './pages/order/order.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Loader from './Loader/Loader.jsx'
import Verify from './pages/verify/verify.jsx'
import MyOrders from './pages/myOrders/myOrders.jsx'
import Footer from './components/Footer/Footer.jsx'
import { set } from 'mongoose'
function App() {
  const [showLogin , setShowLogin] = React.useState(false)
  const [loading , setLoading] = React.useState()
  const url = 'https://food-backend-5fyj.onrender.com'
  return (
    <>
    {showLogin ? <LoginPopup url={url} setShowLogin={setShowLogin} />:<></> }
    <div className="App">
        <Navbar setShowLogin={setShowLogin}/>
            <Routes>
              setLoading(true)
              <Route path="/" element={loading ? <Loader />:<Home />} />
                setLoading(false) 
                <Route path="/cart" element={loading ? <Loader />:<Cart />} />
                <Route path="/order" element={<Order />} />  
                <Route path="/verify" element={<Verify />} />
                <Route path="/myorders" element={<MyOrders url={url}/>} />
            </Routes>
            <Footer />
           
      </div>
      
    </>
  )
}
export default App
