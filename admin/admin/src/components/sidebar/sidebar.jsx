import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-items'>
            <NavLink to={'/add'} className='sidebar-item'>
                <img src={assets.add_icon}  />
                <p>Add Items</p>
            </NavLink>
            <NavLink to={'/orders'} className='sidebar-item'>
                <img src={assets.order_icon}  />
                <p>Orders</p>
            </NavLink>
            <NavLink to={'/list'} className='sidebar-item'>
                <img src={assets.order_icon}  />
                <p>List Items</p>
            </NavLink>
        </div>
    </div>
    )
}

export default Sidebar
