// Import the mongoose library for MongoDB interaction
import mongoose from 'mongoose';

// Define a new Mongoose schema for the products collection
const ProductsSchema = new mongoose.Schema(
    {
        // Define a field for the product name, specifying it as a string type and required
        name: {
            type: String,
            required: true
        },
        // Define a field for the product price, specifying it as a number type and required
        price: {
            type: Number,
            required: true
        },
        // Define a field for the product rating, specifying it as a number type and required
        rating: {
            type: Number,
            required: true
        },
        // Define a field for the product brand, specifying it as a string type and required
        brand: {
            type: String,
            required: true
        },
        // Define a field for the user who posted the product, specifying it as a string type and required
        postedBy: {
            type: String,
            required: true
        }
    },
    // Additional options for the schema, including timestamps for createdAt and updatedAt fields
    { timestamps: true }
);

// Create a Mongoose model named 'Product' using the defined schema
export default mongoose.model('Product', ProductsSchema);
