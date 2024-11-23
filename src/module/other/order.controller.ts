/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Request, Response } from "express";
import { OrderServices } from "./order.service";
import mongoose from "mongoose";

//Controller function to create a new order.
const createOrder = async (req: Request, res: Response, ) => {
    try {        
        const body = req.body     
        const data = await OrderServices.createOrderIntoDB(body);
        res.send({
            message: "Order created successfully",
            status: true,
            data
        })
    } catch (error) {
        handleError(res, error)        
    }
}
//Error handling function
const handleError = (res: Response, error: any) => {
    if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error,
            stack: error.stack
        });
    } else {
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            error,
            stack: error.stack
        });
    }
};
export const OrderController = {
    createOrder
}