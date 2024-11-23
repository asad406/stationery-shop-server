import { model, Schema } from "mongoose";
import { IStationery } from "./stationery.interface";

const stationerySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'], 
        min: [0, 'Price must be a positive number']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"]
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity must be a positive number']
    },
    inStock: {
        type: Boolean,
        required: [true, 'Stock status is required']
    }
},
    {
        timestamps: true
    }
)

const Stationery = model<IStationery>('Stationery', stationerySchema)
export default Stationery