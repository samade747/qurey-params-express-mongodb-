// Import the Express framework for building web applications
import express from 'express'

// Import the dotenv module for loading environment variables
import dotenv from 'dotenv'

// Import route handlers for authentication and product-related operations
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'

// Import the dbConnection function from the config file
import { dbConnection } from './utils/config.js'

// Create an instance of the Express application
const app = express()

// Load environment variables from a .env file into process.env
dotenv.config()

// Call the dbConnection function to establish a connection to the database
dbConnection()

// Add middleware to parse incoming requests with JSON payloads
app.use(express.json())

// Mount the authentication routes at the /auth base URL
app.use("/auth", authRoutes)

// Mount the product routes at the /products base URL
app.use("/products", productRoutes)

// Start the Express application and listen for incoming HTTP requests
app.listen(process.env.PORT, () => {
    // Log a message indicating the port the server is listening on
    console.log(`Server is working on port number ${process.env.PORT}`)
}) 
