import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Stationery from "../stationery/stationery.model";

const orderSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'An Email can not use twice']
    },
    product: {
        type: String,
        require: [true, 'Product is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min:[1,'Quantity at least 1']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
        min: [0,'Total price a positive number']
    }
},
    {
        timestamps: true
    }
)
orderSchema.pre('save',async function(next) { 

     //Find the product by ID
        const product = await Stationery.findById(this.product)
        if (!product) {
            throw new Error('Product not found');
        }
        //Check if sufficient quantity is available
        if (product.quantity < this.quantity) {
            throw new Error('Insufficient stock');
        } 
        //If quantity updated after finish quantity update inStock as true
        if (product.quantity > 0) {
            product.inStock = true;
        } 
        //If quantity finish update inStock as false      
        product.quantity -= this.quantity;
        if (product.quantity === 0) {
            product.inStock = false;
        }
        await product.save()
        next()
})
const Order = model<IOrder>('Order',orderSchema)
export default Order