import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// placing user  order for frontend
const placeOrder = async (req,res) =>{
    const frontend_Url = "https://food-ordering-3pzc.onrender.com";
    try{
        const newOrder = new orderModel({
            userId: req.user,
            orderItems: req.body.items,       
            amount: req.body.amount,
            address: req.body.address,
            status: req.body.status,
            payment: false                    
        });
        await newOrder.save();
        await userModel.findOneAndUpdate({_id: req.user}, {cartData: {}});
        const line_items = req.body.items.map((x) => ({
            price_data: {
                currency: "usd",  
                product_data: {
                    name: x.name,
                },
                unit_amount: Number(x.price) * 100,
            },
            quantity: x.quantity,
        }));
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "delivery charges",
                },
                unit_amount: 2*100,
            },
            quantity: 1,
        });
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`,
            
        });
        res.json({ 
            success: true,
            url: session.url 
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while placing order",
            error:error.message
        });
    }
}
const verifyOrder = async (req, res) => {
    const orderId = req.query.orderId;
    const success = req.query.success;
    try{
        if(success =="true"){
            await orderModel.findOneAndUpdate({_id: orderId}, {payment : "true"});
            res.json({
                success: true,
                message: "paid",
            })
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({
                success: false,
                message: "payment failed",
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while verifying order",
            error:error.message
        });
    }
}
const myOrders = async (req, res) => {
    try{
        const orders = await orderModel.find({userId: req.user});
        res.json({
            success: true,
            orders,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while fetching orders",
            error:error.message
        });
    }
}
const orders = async (req,res)=>{
    const orders = await orderModel.find({});
    res.json({
        success: true,
        orders,
    });
}
const trackOrderStatus = async (req, res) => {
    try{
        const order = await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status});
        res.json({
            success: true,
            order,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while fetching orders",
            error:error.message
        });
    }
}
export { placeOrder, verifyOrder, myOrders, orders, trackOrderStatus };