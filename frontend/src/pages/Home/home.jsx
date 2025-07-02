import React from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import Header from '../../components/Header/Header.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx' 
import Loading from '../../Loading/Loading.jsx'
import { StoreContext } from '../../components/context/storeContext.jsx'
import { useContext } from 'react'
function home() {
    const [category, setCategory] = React.useState('All')
    const { food_list }  = useContext(StoreContext);
    const [loading, setLoading] = React.useState(true)                                                 
    return (
        <div>   
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            
            {food_list.length===0 ? <Loading /> : <FoodDisplay category={category} />}
                
            <AppDownload />
        
            
        </div>
    )
    }

export default home
