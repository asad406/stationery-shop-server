import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (order:IOrder) =>{
    const data = new Order(order);
    const result = await data.save()
    return result
}

export const OrderServices = {
    createOrderIntoDB
}