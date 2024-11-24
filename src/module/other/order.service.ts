import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (order:IOrder) =>{
    const data = new Order(order);
    const result = await data.save()
    return result
}
const getAllOrderFromDB = async () =>{
   
    const result = await Order.find()
    return result
}

export const OrderServices = {
    createOrderIntoDB,
    getAllOrderFromDB
}