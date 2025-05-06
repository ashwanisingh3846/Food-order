import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import { Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders/Order'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Add from './pages/Add/Add'
import List from './pages/List/List'
const App = () => {
  const url = 'http://localhost:8080'
  return (
    <div className='app-content'>
      <ToastContainer />
      <Navbar />
      <div className='content'>
      <Sidebar />
      <Routes>
        <Route path='/orders' element={<Orders url={url} />} />
        <Route path='/add' element={<Add url={url} />} />
        <Route path='/list' element={<List  url={url} />} />
      </Routes>
      
      </div>
    </div>
  )
}

export default App
