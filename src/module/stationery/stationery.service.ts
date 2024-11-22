import Stationery from "./stationery.model";
import { IStationery } from "./stationery.interface";
//Service function to save a new stationery item into the database.
const createStationeryIntoDB = async (stationery: IStationery) => {
    const data = new Stationery(stationery)
    const result = await data.save()
    return result
}
//Service function to find all stationery items from the database.
const getAllStationeryFromDB = async () => {
   const result = await Stationery.find()
    return result
}
export const StationeryServices = {
    createStationeryIntoDB,
    getAllStationeryFromDB
}