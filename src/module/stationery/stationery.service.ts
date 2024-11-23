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
//Service function to update one stationery items by id to the database.
const updateStationeryToDB = async (productId: string, payload: Partial<IStationery>) => {
    const options = { new: true, runValidators: true };
    const result = await Stationery.findByIdAndUpdate(productId, payload, options)
    return result
}
//Service function to delete one stationery items by id to the database.
const deleteStationeryFromDB = async (productId: string) => {
    const result = await Stationery.findByIdAndDelete(productId)
    return result
}
export const StationeryServices = {
    createStationeryIntoDB,
    getAllStationeryFromDB,
    getSingleStationeryByIdFromDB,
    updateStationeryToDB,
    deleteStationeryFromDB
}