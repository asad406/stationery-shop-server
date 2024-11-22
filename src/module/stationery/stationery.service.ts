import Stationery from "./stationery.model";
import { IStationery } from "./stationery.interface";

const createStationeryIntoDB = async (stationery: IStationery) => {
    const data = new Stationery(stationery)
    const result = await data.save()
    return result
}
export const StationeryServices = {
    createStationeryIntoDB
}