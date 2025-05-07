import React, { createContext, useEffect  } from "react";
import axios from "axios"
export const StoreContext = createContext(null);

export const StoreProvider = (props) => {
        const [cartItems, setCartItems] = React.useState({});
        const [token , setToken] = React.useState("");
        const [food_list , setFoodList] = React.useState([]);
        const url = 'https://order-online.onrender.com'
        const addToCart =async (itemId) => {
            if(!cartItems[itemId]){
                setCartItems({...cartItems, [itemId]: 1});
            }else{
                setCartItems({...cartItems, [itemId]: cartItems[itemId] + 1});
            }
            if(token){
                await axios.post(`${url}/api/cart/add` , {itemId} ,{headers:{token}});
            }
        }
        const removeFromCart =async (itemId) => {
            if(cartItems[itemId]){
                setCartItems({...cartItems, [itemId]: cartItems[itemId] - 1});
            }
            
            if(token){
                await axios.post(`${url}/api/cart/remove` , {itemId} ,{headers:{token}});
            }   
        }   
        const getTotalCartAmount = () => {
            let total = 0;
            for(let key in cartItems){
                total += cartItems[key] * food_list.find(item => item._id === key).price;
            }
            return total;
        }
        const getFoodList = async () => {
            const response = await axios.get(`${url}/api/food/getFood`);
            setFoodList(response.data.food)
        }
        const loadCartData = async (token) =>{
            
            if(token){
                const response = await axios.get(`${url}/api/cart/getcart`, {headers:{token}});
                setCartItems(response.data.cartData);
            }   
        }
        async function loadData() {
            try {
                
                await getFoodList();
                const token = localStorage.getItem("token");
                if (token) {
                    setToken(token);
                    await loadCartData(token);
                }
            } catch (error) {
                console.error("Error loading data:", error);
            }
        }
        useEffect(() => {
            
            loadData();
        }, []);
        
    const contextValue ={
        cartItems
        ,addToCart
        ,removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        url,
        getFoodList,
        food_list,

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
);
}; 