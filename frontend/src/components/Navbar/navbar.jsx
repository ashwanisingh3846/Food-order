import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from "../../assets/assets"
import SearchIcon from "../../icons/search"
import { StoreContext } from '../context/storeContext'
import './navbar.css'
import { Link } from 'react-router-dom' 
const Navbar = ({ setShowLogin }) => {
  const  { token , setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [menu, setMenu] = React.useState("menu")
    return (
    <div className="navbar">
      <div className="navbar-left">
          <img src={assets.logo} alt="logo" />
      </div>
      <div className="navbar-center">
      <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}><a>Home</a></Link>
      <a href="#explore-menu">menu</a>
      <a href="#app-download">mobileapp</a>
      <a href="#contact-app">contact-us</a>
      </div>
      <div className='navigate'>
      <div className="right-side">
        <SearchIcon />
    <img onClick={()=>navigate("/cart")} className='cart-img'  src="https://static.vecteezy.com/system/resources/previews/025/012/839/original/black-and-white-illustration-of-basket-icon-vector.jpg"  style={{width:'2rem',height:'2rem', "cursor":"pointer","background-color": "slategray"}} alt="basket" />
      {!token ?<button onClick={()=>{setShowLogin(true)}}  className='sign-in' >SignIn</button>:<div className="profile-icon">
        <div className="profile-pic">
        <img src={assets.profile_icon} alt="profile" />
        </div>
            <div className="dropdown">
              <div className="orders">
                <img src={assets.bag_icon} alt="orders" />
                <p onClick={(e)=>{
                  e.preventDefault();
                  navigate("/myorders")
                  }}>Orders</p>
                </div> 
                <hr />
                <div className="logout">
                <img src={assets.logout_icon} alt="logout" />
                <p onClick={(e)=>{
                  e.preventDefault(); 
                    localStorage.removeItem("token"); 
                    setToken(null);
                    navigate("/")}}>
                    Logout
                    </p>
                </div>
            </div>
        </div>}
      </div> 
      </div> 
    </div>
  )
}

export default Navbar
