import React from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import Header from '../../components/Header/header.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx' 


function home() {
    const [category, setCategory] = React.useState('All')
    return (
        <div>   
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
            <AppDownload />
            
        </div>
    )
    }

export default home
