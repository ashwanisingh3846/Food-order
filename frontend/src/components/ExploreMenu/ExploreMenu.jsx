
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from "../../assets/assets"
    
    const ExploreMenu = ({category , setCategory}) => {
        return (
            <div className='menu-head'>
                <h2>Explore our Menu</h2>
                <p>Choose from  a diverse menu featuring a dictable array of dishes . Our mission is to provide you with the best food experience possible.</p>
                <div id= "explore-menu" className='menu-list'>
                    {menu_list.map((menu , index)=>{
                        return (
                            <div  onClick={()=>setCategory((prev) => prev === menu.menu_name ? "All" : menu.menu_name)} className='menu-item'  key={index}>
                                
                                <img className={category === menu.menu_name ? "active" : ""} src={menu.menu_image} alt="menu" />
                                <h3>{menu.menu_name}</h3>
                            </div>
                        )
                    })} 
                </div>
            </div>
        )
    }
    export default ExploreMenu
