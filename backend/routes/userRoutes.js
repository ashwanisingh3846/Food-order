import { Router } from 'express';
import { login , registerUser } from '../controllers/userController.js';
const userRoutes = Router();
userRoutes.post("/login",login);
userRoutes.post("/registeruser",registerUser);
export default userRoutes;  