/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { StationeryServices } from "./stationery.service";
import mongoose from "mongoose";
//Controller function to create a new stationery item.
const createStationery = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const data = await StationeryServices.createStationeryIntoDB(body);
        res.send({
            message: "Stationery created successfully",
            success: true,
            data
        })
    } catch (error) {
        handleError(res, error);       
    }
}
//Controller function to get all stationery items.
const getAllStationery = async (req: Request, res: Response) => {
    try {
        const data = await StationeryServices.getAllStationeryFromDB();
        res.send({
            message: "Get all Stationery successfully",
            success: true,
            data
        })
    } catch (error) {
        handleError(res, error);   
    }
}
//Controller function to get single stationery items by id.
const getSingleStationeryByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        const data = await StationeryServices.getSingleStationeryByIdFromDB(id);
        res.send({
            message: "Product retrieved successfully",
            success: true,
            data
        })
    } catch (error) {
        handleError(res, error);   
    }
}
//Controller function to update single stationery items by id.
const updateStationeryByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        const body = req.body
        // const options = {new: true, runValidators: true}
        const data = await StationeryServices.updateStationeryToDB(id, body);
        res.send({
            message: "Product updated successfully",
            success: true,
            data
        })
    } catch (error) {
        handleError(res, error);   
    }
}
//Controller function to update single stationery items by id.
const deleteStationeryByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        await StationeryServices.deleteStationeryFromDB(id);
        res.send({
            message: "Product deleted successfully",
            success: true,
            data: {}
        })
    } catch (error) {
        handleError(res, error);   
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
export const stationeryController = {
    createStationery,
    getAllStationery,
    getSingleStationeryByID,
    updateStationeryByID,
    deleteStationeryByID
}