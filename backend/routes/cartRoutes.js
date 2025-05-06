import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js";
import isAuth from "../Middleware/auth.js";
const cartRoutes = express.Router();
cartRoutes.use(express.json());
cartRoutes.get("/getcart",isAuth,getCart);
cartRoutes.post("/add",isAuth,addToCart);
cartRoutes.post("/remove",isAuth,removeFromCart);
export default cartRoutes;