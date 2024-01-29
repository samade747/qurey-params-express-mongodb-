// Import the Express framework
import express from 'express'

// Import controller functions from the productsController file
import {
    getProductsController,
    getProductController,
    addProductController,
    updateProductController,
    deleteProductController
} from '../controllers/productsController.js'

// Create a new router instance using Express
const productRoutes = express.Router()

// Define a route to handle GET requests for retrieving all products
// This route will handle GET requests to /products
// When a GET request is made to this endpoint, it will be handled by the getProductsController
productRoutes.get('/', getProductsController)

// Define a route to handle GET requests for retrieving a specific product
// This route will handle GET requests to /products/:productId
// The :productId parameter is a placeholder for the product ID
// When a GET request is made to this endpoint, it will be handled by the getProductController
productRoutes.get('/:productId', getProductController)

// Define a route to handle POST requests for adding a new product
// This route will handle POST requests to /products
// When a POST request is made to this endpoint, it will be handled by the addProductController
productRoutes.post('/', addProductController)

// Define a route to handle PUT requests for updating a product
// This route will handle PUT requests to /products/:id
// The :id parameter is a placeholder for the product ID
// When a PUT request is made to this endpoint, it will be handled by the updateProductController
productRoutes.put('/:id', updateProductController)

// Define a route to handle DELETE requests for deleting a product
// This route will handle DELETE requests to /products/:id
// The :id parameter is a placeholder for the product ID
// When a DELETE request is made to this endpoint, it will be handled by the deleteProductController
productRoutes.delete('/:id', deleteProductController)

// Export the productRoutes router instance
export default productRoutes
