import express, { Application } from 'express';
import cors from 'cors';
import stationeryRouter from './module/stationery/stationery.route';
import orderRouter from './module/other/order.route';
const app:Application = express();
app.use(express.json());
app.use(cors())

//Application Routes
app.use('/api/products', stationeryRouter);
app.use('/api/orders', orderRouter)
export default app;
