import React, { useContext, useEffect  } from 'react'
import { StoreContext } from '../../components/context/storeContext'
import { useNavigate } from 'react-router-dom'
import "./order.css"
import axios from 'axios'
const order = () => {
    const {getTotalCartAmount ,cartItems,token ,food_list , url } = useContext(StoreContext);
    const [orderDetails, setOrderDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
    });
    const handleOrderDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setOrderDetails({ ...orderDetails, [name]: value });
    }
    const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo.quantity = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        });
        let orderData = {
            address: orderDetails,
            items: orderItems,
            amount: getTotalCartAmount() + 2,

        };
        let response = await axios.post(`${url}/api/order/createorder`, orderData, { headers: { token } });
        console.log("after placing order");
        if(response.data.success){
            const { url } = response.data;
            window.location.replace(url);
        }
        else{
            alert("Something went wrong");
        }
        
    }
    const navigate = useNavigate();
        useEffect(() => {
            if(!token){
                navigate("/cart");
            }
            else if(getTotalCartAmount() === 0){
                navigate("/cart");
            }
        }, [token]);
    return (
        
            <form onSubmit={placeOrder} className="place-order">
                <div className="place-order-left-details">
                    
                    <div className="multi-field">
                        <input required name='firstName' onChange={handleOrderDetails} value={orderDetails.firstName} type="text" placeholder='First Name' />
                        <input required name='lastName' onChange={handleOrderDetails} value={orderDetails.lastName} type="text" placeholder='Last Name' />
                </div>
                <input required name='email' onChange={handleOrderDetails} value={orderDetails.email} type="email" placeholder='Email address'/>
                <input required name='street' onChange={handleOrderDetails} value={orderDetails.street} type="text" placeholder='Street' />
                <div className="multi-field">
                        <input required name='city' onChange={handleOrderDetails} value={orderDetails.city} type="text" placeholder='City' />
                        <input required name='state' onChange={handleOrderDetails} value={orderDetails.state} type="text" placeholder='State' />
                </div>
                <div className="multi-field">
                        <input required name='zip' onChange={handleOrderDetails} value={orderDetails.zip} type="text" placeholder='Zip code' />
                        <input required name='country' onChange={handleOrderDetails} value={orderDetails.country} type="text" placeholder='Country' />
                </div>
                <input required name='phone' onChange={handleOrderDetails} value={orderDetails.phone} className='phone' type="text" placeholder="Phone"/>
                </div>
                <div className="place-order-write">
                <div className="cart-totals-details-left">
            <h2>Cart Totals</h2>
            <hr />
            <div className="subtotal">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="delivery-fee">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="total">
            <b>Total </b>
            <p>${getTotalCartAmount() + 2}</p>
            </div>
            <button>Proceed to Payment</button>
        </div>
        </div>
    </form>
    )
    }
export default order
