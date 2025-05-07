import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../components/context/storeContext.jsx'
import './cart.css'

const Cart = () => {
    const { cartItems ,food_list, removeFromCart , getTotalCartAmount,url } = React.useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className='cart'>
        <div>
            <div className="cart-item-title">
        <li>Item</li>
        <li>Title</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
        <li>Remove</li>
        </div>
        <br />
        <hr />
        <div className="cart-items-details">
            
            {
                food_list.map((item , index) => {
                    if(cartItems[item._id] > 0){
                    return ( 
                        
                        <div className="cart-item" key={index}>
                            
                            <img src={`${url}/images/${item.image}`} alt="" />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p> {cartItems[item._id]}</p>
                            <p> ${item.price * cartItems[item._id]}</p>
                            
                            <p onClick={()=>{
                                removeFromCart(item._id)
                            }}>X</p>
                        </div>
                    )
                    
                }
            })
            }
            
        </div>
        </div>
        
        <div className="cart-totals">
        <div className="cart-totals-details-left">
            
            <hr />
            <div className="subtotal">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="delivery-fee">
            <p>Delivery Fee </p>
            <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="total">
            <b>Total </b>
            <p>${getTotalCartAmount() + 2}</p>
            </div>
            <button className='proceed-to-checkout' onClick={()=>navigate("/order")}>Proceed to Checkout</button>
        </div>
       
        <div className='cart-totals-details-right'>
        <div className='promo-code'>
            <div className="promo">
            <p>Have a Promo Code?</p>
            <div className="field">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>

    )
}
export default Cart

