# Food Website backend

This is the backend implementation for the Food App, built using Node.js. It provides RESTful APIs for managing users, food items, orders, and other core functionalities of the application.

# Features

## User Authentication and Authorization

Login and registration using JWT.

Role-based access control.

## Food Item Management

CRUD operations for food items.

## Order Management

Place, update, and view orders.

## API Documentation

# Prerequisites

Before running the application, ensure you have the following installed:

Node.js (version 16 or higher recommended)

MongoDB (for database)

npm (comes with Node.js)

# API Endpoints

## Authentication

POST /api/auth/register - Register a new user.

POST /api/auth/login - Login a user and get a token.

## Food Items

GET /api/foods - Get a list of all food items.

POST /api/foods - Add a new food item (Admin only).

PUT /api/foods/:id - Update a food item (Admin only).

DELETE /api/foods/:id - Delete a food item (Admin only).

## Orders

POST /api/orders - Place a new order.

GET /api/orders - Get all orders (Admin only).

GET /api/orders/:id - Get details of a specific order.


## Project Structure

src/
├── controllers/      # Business logic for routes
├── models/           # Mongoose schemas and models
├── routes/           # API route definitions
├── middlewares/      # Custom middlewares
├── utils/            # Helper functions
├── config/           # Configuration files
└── app.js            # Main application file
