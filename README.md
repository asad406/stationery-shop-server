# Stationery Shop Server

## Description:
My Stationery Shop Server Application designed to manage and track stationery products. It provides features for creating, updating, deleting, getting and managing products and order.This application specially manage stock and product quantity. It also provide total revenue from all orders.

## Features
- **Product Management**: Add, update, delete, and view all products.
- **Order Management**: Place order and automatically update product quantities and stock. Also calculate the total revenue from all order.
- **Validation and Error Handling**: Ensure data validation using mongoose validation and feedback suitable Error

## Used Technology and Installation instruction
- [Node.js](https://nodejs.org/download/package-manager/.) (Download Node.js)
- Express (```npm i express```)
- MongoDB (```npm i mongodb```)
- Mongoose (```npm i mongoose```)
- Dotenv (```npm i dotenv```)
- Cors (```npm i cors```)

### Some development dependencies
- TypeScript (```npm install typescript --save-dev```)
- Eslint (```npm i -D eslint@9.14.0```)
- Prettier (```npm i -D --exact prettier```)

## Instruction to run the Project
- To nun this project in command line enter
(```ts-node-dev --respawn --transpile-only src/server.ts```)
- To build the project
(```tsc```)
- To find error by lint
(```npx eslint . ```)
- To format the project
(```prettier . --write```)

## Endpoints
- GET/api/products : To get all stationery items
- GET/api/products/:productId: get single stationery item by ID
- POST/api/products: Create a new stationery item.
- PUT/api/products/:productId: Update a stationery item by ID
- DELETE/api/products/:productId: Delete a stationery item by ID.
- POST/api/orders: Create a new order.
- GET/api/orders/revenue: To get total revenue

## Backend Server 
- In this project use Vercel as live server
- [Live link](https://stationery-shop-two.vercel.app/api/products)