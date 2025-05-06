import React, {  useEffect } from 'react'
import './Order.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
const Order = ({url}) => {
  
  const [data , setData] = React.useState([])
  let orderDetails;
useEffect(
    orderDetails =  () => {
    axios.get(`${url}/api/order/allorders` )
    .then((response) => {
          if(response.data.success){
              setData(response.data.orders)
            }
          else{
              toast.error(response.data.message)
            }
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(data);
    },[])
    const statusHandler = async (event , orderId) => {
      let response = await axios.post(`${url}/api/order/status` , {orderId , status : event.target.value}, { headers: { token: localStorage.getItem("token") } });
      if(response.data.success){
          orderDetails();
      }
    }  
  return (
    <div className='order-content'>
      <h1>Orders</h1>
      <div className="order-list">
        {data.map((item , index) => {
            return<div className="order-item" key={index}>
              <div className="both">
              <div className="cotent">
              <div className="row">
              <img src={assets.parcel_icon} alt="" />
              <p className="order-item-food">
                {item.orderItems.map((orderitem , index) => {
                  if(index === item.orderItems.length - 1){
                    return(
                      orderitem.name + " x " + orderitem.quantity
                    )}
                    else
                    {
                      return (
                        orderitem.name + " x " + orderitem.quantity + ", "
                      )
                    }
                }
                )}
              </p>
              </div>
              <div className="address-details">
              <p className="order-item-price"><b>Name :  </b>{item.address.firstName + " " + item.address.lastName}</p>
              <p className="order-item-street"><b>street : </b>{item.address.street}</p>
              
              <p className="order-item-city">
              <b>Address :</b>
                 <p>{item.address.city}</p>,
                 <p>{item.address.state} </p>,
                 <p> {item.address.zip}</p> , 
                    {item.address.country}
              </p>
              <p><b>Phone : </b>{item.address.phone}</p>
              </div>
              </div>
              <div className="items-info">
              <p className="item-length"><b>items : </b>{item.orderItems.length}</p>
              <p>${item.amount}</p>
              
              <select onChange={(e)=>{statusHandler(e , item._id)}} name="" id="">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select> 
              </div> 
              </div>        
            </div>
        })}
      </div>
    </div>
  )
}

export default Order
