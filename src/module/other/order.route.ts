import { Router } from "express";
import { OrderController } from "./order.controller";

const orderRouter = Router()
//Route ot create a new Order
orderRouter.post('/', OrderController.createOrder)
orderRouter.get('/revenue', OrderController.totalRevenue)

export default orderRouter