import express from "express";
import { addToCart, getCartProducts, removeAllFromCart, updateQuantity } from "../controllers/cart.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);
router.get("/", protectRoute, getCartProducts);

// axios.put(`/cart/${productId}`, { 

export default router;

