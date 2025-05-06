import React from 'react'
import { assets } from '../../assets/assets'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={assets.logo} alt="" />
            </div>
            <div className="navbar-items">
                <img src={assets.profile_image} alt="" />
            </div>
        </div>
    )
}

export default Navbar
