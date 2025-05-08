
import React from 'react'
import { StoreContext } from '../context/storeContext.jsx'
import './FoodItems.css'
import assets from '../../assets/assets.js'
const FoodItems = ({id , name , image , price , description }) => {
    const { cartItems , addToCart , removeFromCart ,url} = React.useContext(StoreContext);
    return (
        <>
        <div className="parent">
        <div className="content">
        <div className="food-image-container">
            
            <div className="imgonimg">
            <img className="food-img" src={`${url}/images/${image}`} 
            alt="food" />
        <div className="item-count">
                {
                    !cartItems[id] ? 
                    <div className="single-add">
                        <img className="overlay" src={assets.add_icon_white} alt="add to cart" onClick={() => addToCart(id)} />
                    </div>
                    :
                    <div className="item-count-inc">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="minus" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
                    </div>
                }
            </div>
            </div>
            
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-disc">
                    {description}
                    <p> ${price}</p>
                </p>
            </div>
        </div>
        </div>

    </div>
    </>
)
}
export default FoodItems
