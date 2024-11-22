import { Router } from "express";
import { stationeryController } from "./stationery.controller";

const stationeryRouter = Router()
// Route to find single stationery item by id
stationeryRouter.get('/:productId', stationeryController.getSingleStationeryByID)
// Route to find all stationery item
stationeryRouter.get('/', stationeryController.getAllStationery)
// Route to create a new stationery item
stationeryRouter.post('/', stationeryController.createStationery)

export default stationeryRouter