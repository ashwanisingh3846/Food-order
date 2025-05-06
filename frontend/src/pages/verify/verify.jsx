import React, { useEffect } from 'react'
import './verify.css'
import axios from 'axios'
import { StoreContext } from '../../components/context/storeContext'
import { useSearchParams, useNavigate } from 'react-router-dom'

const Verify =  () => {
    const {url} = React.useContext(StoreContext);
    const [searchparam , setSearchparam] = useSearchParams();
    const navigate = useNavigate();
    const success = searchparam.get('success');
    const orderId = searchparam.get('orderId');
    const verifyOrder = async () =>{
        console.log("hitting the verifyOrder backend")
        const responce = await axios.post(`${url}/api/order/verifyorder?orderId=${orderId}&success=${success}`);
        console.log(responce.data); 
        console.log(responce.data.success);
        console.log("after hitting the verifyOrder backend")
        if(responce.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }
    useEffect(() => {
        verifyOrder();
    }, [])
    return (
        <div className='verify'>
            
            <div className="spinner">

            </div>
        </div>
    )
}

export default Verify
