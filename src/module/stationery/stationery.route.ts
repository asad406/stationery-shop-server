import { Router } from "express";
import { stationeryController } from "./stationery.controller";

const stationeryRouter = Router()
// Route to create a new stationery item
stationeryRouter.post('/', stationeryController.createStationery)

export default stationeryRouter