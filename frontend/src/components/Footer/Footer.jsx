import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="tomato">
                   <h2>Food Order</h2>
                    </div>
                <p>we are a leading food delivery service provider in the city . we deliver food to your doorstep</p>
                <div className="social">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-middle">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
                </div>
                <div id="contact-app" className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9876543210</li>
                        <li>contact@fooddelivery.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p> © 2022 Food Delivery. All rights reserved.</p>
        </div>
    )
}

export default Footer
