import userModel from "../models/userModel.js";

export const addToCart = async (req,res)=>{
    try{
        let userData = await userModel.findOne({_id: req.user});
        let cartData = userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findOneAndUpdate({_id: req.user}, {cartData: cartData});
        res.json({
            "success":true,
            "message":"Added to cart"
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            "success":false,
            "message":"Error while adding to cart"
        })
    }
    
}

export const removeFromCart = async (req,res)=>{
        try {
            let userData = await userModel.findOne({_id: req.user});  
            let cartData = userData.cartData;
            if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
            await userModel.findOneAndUpdate({_id: req.user}, {cartData: cartData});
            res.json({
                "message":"Removed from cart"   
            })
        }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                "success":false,
                "message":"Error while removing from cart"
            })
        }
}
export const getCart = async (req, res)=>{
        const cartData = await 
        userModel.findOne({_id: req.user});
        res.json({
            cartData: cartData.cartData,
            "success":true,
            "message":"Cart fetched successfully"
        })
}