import { Request, Response } from "express";
import { StationeryServices } from "./stationery.service";
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
    } catch {
        res.send({
            success: false,
            message: "Something went wrong"
        })
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
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
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
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}
//Controller function to update single stationery items by id.
const updateStationeryByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        const body = req.body
        const data = await StationeryServices.updateStationeryToDB(id, body);
        res.send({
            message: "Product updated successfully",
            success: true,
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
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
            data : {}
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}

export const stationeryController = {
    createStationery,
    getAllStationery,
    getSingleStationeryByID,
    updateStationeryByID,
    deleteStationeryByID
}