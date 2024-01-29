// Import the Express framework
import express from 'express'

// Import the registerController from the authController file
import { registerController } from '../controllers/authController.js'

// Create a new router instance using Express
const authRoutes = express.Router()

// Define a route for the registration API
// This route will handle POST requests to /auth/register
// When a POST request is made to this endpoint, it will be handled by the registerController
authRoutes.post('/register', registerController)

// Export the authRoutes router instance
export default authRoutes
