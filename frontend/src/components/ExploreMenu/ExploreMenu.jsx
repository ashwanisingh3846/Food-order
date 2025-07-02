
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from "../../assets/assets"
    
    const ExploreMenu = ({category , setCategory}) => {
        return (
            <div className='menu-head'>
                <h2 style={{fontSize:"1.8rem", color:"lightskyblue" }}>Explore our Menu</h2>
                <p style={{fontSize:"1rem",backgroundColor:"rgb(246, 239, 239)", color:"black", padding:"0.5rem"}}>Choose from  a diverse menu featuring a dictable array of dishes .</p>
                <div style={{width:"100%", margin:"auto"}} id= "explore-menu" className='menu-list'>
                    {menu_list.map((menu , index)=>{
                        return (
                            <div id="Menu" onClick={()=>setCategory((prev) => prev === menu.menu_name ? "All" : menu.menu_name)} className='menu-item'  key={index}>     
                                <img style={{scrollBehavior:"smooth"}} src={menu.menu_image} alt={menu.menu_name}/>
                                <h3>{menu.menu_name}</h3>
                            </div>
                        )
                    })} 
                </div>
            </div>
        )
    }
    export default ExploreMenu
