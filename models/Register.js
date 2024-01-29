// Import the mongoose library for MongoDB interaction
import mongoose from 'mongoose';

// Define a new Mongoose schema for the users collection
const UsersSchema = new mongoose.Schema(
    {
        // Define a field for the username, specifying it as a string type and required
        userName: {
            type: String,
            required: true
        },
        // Define a field for the email, specifying it as a string type and required
        email: {
            type: String,
            required: true
        },
        // Define a field for the password, specifying it as a string type and required
        password: {
            type: String,
            required: true
        }
    },
    // Additional options for the schema, including timestamps for createdAt and updatedAt fields
    { timestamps: true }
);

// Create a Mongoose model named 'User' using the defined schema
export default mongoose.model('User', UsersSchema);
