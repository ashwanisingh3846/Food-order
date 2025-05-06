import React from 'react';
import './myOrders.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../components/context/storeContext.jsx';
import assets from '../../assets/assets.js';
const MyOrders = ({ url }) => {
    const { token } = useContext(StoreContext);
    console.log("the toek is "+token);
    const [orders, setOrders] = useState([]);
    const orderDetails = async () => {     
        
        let response = await axios.post(`${url}/api/order/myorders`,{}, { headers: { token } });
        console.log("after calling the api");
        if(response.data.success){
            setOrders(response.data.orders);
        }
        else{
            alert("Something went wrong");
        }
        console.log(response.data);
        console.log(orders);
        console.log(response.data.orders);
    }
    useEffect( () => {
        if(token){  
        orderDetails();
        }
    }, [ token ]);
    return (
        <div className="my-orders">
            
            <div className="my-orders-details">
            <h2>My Orders</h2>
                {
                    orders.map((order , index) => {
                        return( 
                        <div className="my-orders-details-item" key={index}>
                            <img src={assets.parcel_icon} alt="parcel" />
                            <p className="order-details">
                                {
                                    order.orderItems.map((item , index)=>{
                                        if(index===order.orderItems.length-1){
                                        return(
                                            item.name+" x "+item.quantity
                                        )
                                    }
                                    else{
                                        return(
                                            item.name+" x "+item.quantity+", "
                                        )
                                    }
                                    })
                                }
                            </p>
                            <p className="order-amount">${order.amount}</p>
                            <b className="order-status">{order.status}</b>
                            <button className='order-details' onClick={()=>orderDetails()}>Track Order</button>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}
export default MyOrders