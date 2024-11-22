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

export const stationeryController = {
    createStationery
}