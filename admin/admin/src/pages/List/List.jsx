import React from 'react'
import axios from 'axios'
import './List.css'
import { toast } from 'react-toastify'
const List = ({url}) => {
    const [data , setData] = React.useState([])
    const getData = async ()=>{
        const response = await axios.get(`${url}/api/food/getFood` )
        console.log(response.data)
        setData(response.data.food)
    }
    React.useEffect(()=>{
        getData()
    },[])
    return (
        <div className="list">
            <div className="head">
                        <b>item</b>
                        <b>name</b>
                        <b>category</b>
                        <b>Quantity</b>
                        <b>description</b>
                        <b>Price</b>
            </div>
            {data.map((item , index)=>{
                console.log(item)
                return (
                        <div key={index} className="list-item-info">
                        <img src={`${url}/images/${item.image}`} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.quantity}</p>
                            <p className="description">{item.description}</p>
                            <div className="both"> 
                            <p>{item.price}</p>
                            <p onClick={async ()=>{
                            const response= await  axios.post(`${url}/api/food/removeFood` , {id : item._id})
                                getData()
                                    toast.success(response.data.message)
                            }}>X</p>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default List
