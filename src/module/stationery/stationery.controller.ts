import { Request, Response } from "express";
import { StationeryServices } from "./stationery.service";

const createStationery = async (req:Request, res: Response) =>{
    try{
        const body = req.body
        const result = await StationeryServices.createStationeryIntoDB(body);
        res.send({
            success : true,
            message: "Stationery created successfully",
            result
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