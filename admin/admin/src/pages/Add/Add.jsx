import React from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {

    const [image , setImage] = React.useState('')
    const [data , setData] = React.useState({
        name : '',
        description : '',
        price : '',
        quantity : '',
        category : 'Salad'
    })
    const dataHandler = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData({...data , [name] : value})
    }
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('image' , image)
        formData.append('name' , data.product)
        formData.append('description' , data.description)
        formData.append('price' , Number(data.price))
        formData.append('quantity' , Number(data.quantity))
        formData.append('category' , data.category)
        const response = await axios.post(`${url}/api/food/addFood` , formData)
        if(response.data.success){
            setImage(false)
            setData({
                name : '',
                description : '',
                price : '',
                quantity : '',
                category : 'Salad'
            })
            toast.success(response.data.message)
        }else{            
            alert('Something went wrong')
        }
    }
    return (
        <div className="add">
            <form action="" className="flex-col">
                <div className="add-img-upload">
                    <label htmlFor="upload-image">
                        <p>Upload Image</p>
                        <img  src={image ? URL.createObjectURL(image) : assets.upload_area} className='add-img-upload-img' alt="" />
                        <input onChange={(event)=>setImage(event.target.files[0])} type="file" id="upload-image" name="image" />
                    </label>
                </div>
                <div className="add-input">
                    <label htmlFor="product">Product name </label>
                    <input onChange={dataHandler} type="text" id="product" name="product" value={data.product} />
                </div>
                <div className="add-input">
                    <label htmlFor="description">product description</label>
                    <textarea onChange={dataHandler} id="description" name="description" value={data.description}></textarea>
                </div>
                <div className="price-quantity">
                <div className="add-input">
                    <label htmlFor="price">Price</label>
                    <input onChange={dataHandler} type="number" id="price" name="price" value={data.price} />
                </div>
                <div className="add-input">
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={dataHandler} type="number" id="quantity" name="quantity" value={data.quantity} />
                </div>
                </div>
                
                <div className="add-input">
                    <label htmlFor="category">Category</label>
                    <select onChange={dataHandler} id="category" name="category" value={data.category}>
                        <option value="Salad">Salad</option>
                        <option value="Rolles">Rolles</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>   
                </div>
                <button onClick={onSubmitHandler} className="Add">Add</button>
            </form>
        </div>
    )
}

export default Add
