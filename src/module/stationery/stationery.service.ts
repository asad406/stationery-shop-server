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
//Service function to find one stationery items by id from the database.
const getSingleStationeryByIdFromDB = async (productId: string) => {
    const result = await Stationery.findById(productId)
    return result
}
export const StationeryServices = {
    createStationeryIntoDB,
    getAllStationeryFromDB,
    getSingleStationeryByIdFromDB,
}