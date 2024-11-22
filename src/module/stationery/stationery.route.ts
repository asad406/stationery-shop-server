import { Router } from "express";
import { stationeryController } from "./stationery.controller";

const stationeryRouter = Router()
// Route to create a new stationery item
stationeryRouter.post('/', stationeryController.createStationery)
// Route to find all stationery item
stationeryRouter.get('/', stationeryController.getAllStationery)

export default stationeryRouter