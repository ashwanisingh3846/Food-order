import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();
import validator from "validator";

export const login = async (req,res)=>{
    const {email , password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,message:"User not found"
        })
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,message:"Invalid email"
        })
    }
    if(!validator.isLength(password , {min:6})){
        return res.status(400).json({
            success:false,message:"Password must be at least 6 characters"
        })
    }
    try{
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({
                success:false,message:"Invalid password"
            })
        }
        const payload = {
            id:user._id
        }
        const token = jwt.sign(payload , process.env.JWT_SECRET);
        res.status(200).json({
            success:true,message:"Login successful",token
        })
    }catch(error){
        res.status(400).json({
            success:false,message:"Error while logging in"
        })
    }
}
export const registerUser = async (req,res)=>{ 
    const {name , email , password } = req.body;

    const exists = await userModel.findOne({email});
    if(exists){
        return res.status(409).json({
            success:false,message:"Email already exists"
        })
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,message:"Invalid email"
        })
    }
    if(!validator.isLength(password , {min:6})){
        return res.status(400).json({
            success:false,message:"Password must be at least 6 characters"
        })
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password , salt);
        const user = new userModel({
            name,
            email,
            password:hash
        });
        const user1 = await user.save();
    
        const token = jwt.sign({id:user1._id} , process.env.JWT_SECRET);
       
        res.status(200).json({
            success:true,message:"User registered successfully"
            ,token
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,message:"Error while registering user"
        })
    }       
}
