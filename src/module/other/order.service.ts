import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (order: IOrder) => {
    const data = new Order(order);
    const result = await data.save()
    return result
}
//aggregation to calculate total revenue.
const calculateTotalRevenue = async () => {
    const revenueData = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: {
                    $sum: {
                        $multiply: ["$totalPrice", "$quantity"]
                    }
                }
            }
        }
    ])

    const totalRevenue = revenueData[0]?.totalRevenue || 0
    return { totalRevenue: totalRevenue }
}

export const OrderServices = {
    createOrderIntoDB,
    calculateTotalRevenue
}