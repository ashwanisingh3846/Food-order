import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
            <h1>Order your favorite food here</h1>
            <button ><a style={{textDecoration:"none"}} href="#Menu">View Menu</a></button>
            </div>
        </div>
    )
}

export default Header
