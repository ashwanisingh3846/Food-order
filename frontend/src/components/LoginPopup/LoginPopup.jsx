import React, {  useContext} from 'react'
import assets from '../../assets/assets'
import { StoreContext } from '../context/storeContext'
import './LoginPopup.css'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {
    const {setToken , url ,token} = useContext(StoreContext);
    const [currentState, setCurrentState] = React.useState('Sign Up');
    const [data , setData] = React.useState({
        name : '',
        email : '',
        password : ''
    })
    const onLogin = async (e)=>{
        e.preventDefault();
        let newUrl = url;
        if(currentState==="Sign Up"){
            newUrl += "/api/user/registeruser";
        }else{
            newUrl += "/api/user/login";
        }
        const response = await axios.post(newUrl , data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token" , response.data.token);
            setShowLogin(false);
        }
        else{
            alert("Something went wrong");
        }
    }
    const dataHandler = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData({...data , [name] : value})
    }
    return (
        <div className = 'login-popup'>
            <form onSubmit={onLogin} action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="close" />
                </div>
                <div className="login-popup-input">
                    {currentState==="Sign Up"?<input onChange={dataHandler} name='name' value={data.name} type="text" placeholder="Your name" required />:<></>}
                    <input onChange={dataHandler} name='email' value={data.email} type="email"  placeholder="email" required />
                    <input onChange={dataHandler} name='password' value={data.password} type="password" placeholder="password" required />
                </div>
                <button onClick={onLogin} type="submit" >{currentState==="Sign Up"?"Create Account":"Login"} </button>
                <div className="login-popup-codition">
                    <input id='login-checkbox' type="checkbox" required />
                    <p>By continuing , i agree to the term of use and privacy policy</p>
                </div>
                {currentState==="login"?<p>Create a new account? <span onClick={()=>{setCurrentState("Sign Up")}} className="login-popup-link">Click here</span></p>:<p>Already have an account? <span onClick={()=>{setCurrentState("login")}} className="login-popup-link">Login here</span></p>}
            </form>
        </div>
    )
}
export default LoginPopup
