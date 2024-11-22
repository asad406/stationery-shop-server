import { Request, Response } from "express";
import { StationeryServices } from "./stationery.service";
//Controller function to create a new stationery item.
const createStationery = async (req:Request, res: Response) =>{
    try{
        const body = req.body
        const data = await StationeryServices.createStationeryIntoDB(body);
        res.send({
            message: "Stationery created successfully",
            success : true,
            data
        })
    }catch{
        res.send({
            success: false,
            message: "Something went wrong"
        })
    }
}
//Controller function to get all stationery items.
const getAllStationery = async (req:Request, res: Response) =>{
    try{        
        const data = await StationeryServices.getAllStationeryFromDB();
        res.send({
            message: "Get all Stationery successfully",
            success : true,
            data
        })
    }catch(error){
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}
//Controller function to get single stationery items by id.
const getSingleStationeryByID = async (req:Request, res: Response) =>{
    try{    
        const id = req.params.productId
        const data = await StationeryServices.getSingleStationeryByIdFromDB(id);
        res.send({
            message: "Get Single Stationery product successfully",
            success : true,
            data
        })
    }catch(error){
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
    getSingleStationeryByID
}