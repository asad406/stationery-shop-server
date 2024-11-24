# Stationery Shop Server

## Description:
My Stationery Shop Server Application designed to manage and track stationery products. It provides features for creating, updating, deleting, getting and managing products and order.This application specially manage stock and product quantity. It also provide total revenue from all orders.

## Features
- **Product Management**: Add, update, delete, and view all products.
- **Order Management**: Place order and automatically update product quantities and stock. Also calculate the total revenue from all order.
- **Validation and Error Handling**: Ensure data validation using mongoose validation and feedback suitable Error

## Installation instruction
- [Node.js](https://nodejs.org/download/package-manager/.) (Download Node.js)
- Express (```npm i express```)
- MongoDB (```npm i mongodb```)
- Mongoose (```npm i mongoose```)
- Dotenv (```npm i dotenv```)
- Cors (```npm i cors```)

Some development dependencies
- TypeScript (```npm install typescript --save-dev```)
- Eslint (```npm i -D eslint@9.14.0```)
- Prettier (```npm i -D --exact prettier```)

## Instruction to run the Project
To nun this project in command line enter
```ts-node-dev --respawn --transpile-only src/server.ts```
To build the project
```tsc```
To find error by lint
```npx eslint . ```
To format the project
```prettier . --write```

