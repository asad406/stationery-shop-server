import { model, Schema } from "mongoose";
import { IStationery } from "./stationery.interface";

const stationerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"]
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Stationery = model<IStationery>('Stationery', stationerySchema)
export default Stationery