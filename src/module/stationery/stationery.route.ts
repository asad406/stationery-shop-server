import { Router } from "express";
import { stationeryController } from "./stationery.controller";

const stationeryRouter = Router()
stationeryRouter.post('/', stationeryController.createStationery)