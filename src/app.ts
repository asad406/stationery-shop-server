import express, { Application } from 'express';
import cors from 'cors';
import stationeryRouter from './module/stationery/stationery.route';
const app:Application = express();
app.use(express.json());
app.use(cors())

//Application Routes
app.use('/api/products', stationeryRouter)
export default app;
