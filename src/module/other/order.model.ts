import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    product: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)
const Order = model<IOrder>('Order',orderSchema)
export default Order