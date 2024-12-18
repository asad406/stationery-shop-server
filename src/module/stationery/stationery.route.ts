import { Router } from "express";
import { stationeryController } from "./stationery.controller";

const stationeryRouter = Router()
// Route to find single stationery item by id
stationeryRouter.get('/:productId', stationeryController.getSingleStationeryByID)

// Route to find all stationery item by query
stationeryRouter.get('/', stationeryController.getAllStationery)

// Route to create a new stationery item
stationeryRouter.post('/', stationeryController.createStationery)

// Route to update a stationery item
stationeryRouter.put('/:productId', stationeryController.updateStationeryByID)

// Route to delete stationery item
stationeryRouter.delete('/:productId', stationeryController.deleteStationeryByID)

export default stationeryRouter