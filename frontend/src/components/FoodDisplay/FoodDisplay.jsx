import './FoodDisplay.css'  
import { useContext } from 'react'
import { StoreContext } from '../context/storeContext.jsx'
import FoodItems from '../FoodItems/FoodItems.jsx';
function FoodDisplay({ category }) {
    const { food_list }  = useContext(StoreContext);
return (
    <> 
    <div className="both">
    <h2>Top dishes near you</h2>
    <div className="container">
            
        <div className="food-list">
            {food_list.map((food,index)=>{
                if(category==="All" || food.category==category){
                    return <FoodItems key={index} id={food._id} name={food.name} image={food.image} 
                    price={food.price} description={food.description} />
                }
            })}
        </div>
        </div>
        </div>    
        </>
    )
}
export default FoodDisplay
