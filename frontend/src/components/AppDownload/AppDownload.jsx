import React from 'react'
import './Appdo.css'
import assets from '../../assets/assets'
function AppDownload() {
    return (
        <div className='app-download-container'>
            <h1> For Better Experience Download Our Tomato App</h1>
                <div id='app-download' className='app-download'>
                        <img className='app-download-icon' src={assets.play_store} alt="google play" />    
                        <img className='app-download-icon' src={assets.app_store} alt="apple store" />    
                </div>
        </div>
    )
}
export default AppDownload


