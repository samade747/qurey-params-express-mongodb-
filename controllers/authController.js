// Import the User model
import User from '../models/Register.js'

// Controller function to handle user registration
export const registerController = async (req, res) => {
    try {
        // Extract user details from request body
        const { userName, email, password } = req.body
        
        // Check if any required fields are missing
        if (!userName || !email || !password) {
            // If any required field is missing, respond with a JSON indicating missing fields
            return res.json({
                status: false,
                message: "Missing fields"
            })
        }

        // Create a new user using the provided details
        const user = await User.create({
            userName,
            email,
            password
        })

        // Respond with JSON indicating successful user registration and include user data
        res.json({
            status: true,
            message: "User Registered Successfully",
            data: user
        })
    } catch (error) {
        // If an error occurs during registration, respond with JSON containing error message
        res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}
