import express from "express";

import { verifyOrder , placeOrder, myOrders, orders, trackOrderStatus } from "../controllers/orderController.js";
import isAuth from "../Middleware/auth.js";

const orderRoutes = express.Router();



orderRoutes.use(express.json());

orderRoutes.post("/createorder",isAuth,placeOrder);
orderRoutes.post("/verifyorder",verifyOrder);
orderRoutes.post("/myorders", isAuth , myOrders);
orderRoutes.get("/allorders",orders);
orderRoutes.post("/status",isAuth,trackOrderStatus);
export default orderRoutes; 