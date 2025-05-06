import React from 'react'
import './App.css'
import { Routes  , Route } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import Order from './pages/order/order.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './pages/verify/verify.jsx'
import MyOrders from './pages/myOrders/myOrders.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  const [showLogin , setShowLogin] = React.useState(false)
  const url = 'http://localhost:8080'
  return (
    <>
    {showLogin ? <LoginPopup url={url} setShowLogin={setShowLogin} />:<></> }
    <div className="App">
        <Navbar setShowLogin={setShowLogin}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
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
