// Import the Product model
import Product from '../models/Product.js'

// Controller function to get all products
export const getProductsController = async (req, res) => {
    try {
        // Extract query parameters from the request
        const { name, price, rating, brand, postedBy } = req.query
        let products

        // Check if rating and postedBy parameters are provided
        if (rating && postedBy) {
            // Find products with rating greater than or equal to provided rating and posted by the provided user
            products = await Product.find({
                rating: { $gte: rating },
                postedBy: postedBy
            })
        } else {
            // If no specific query parameters provided, find all products
            products = await Product.find()
        }

        // Respond with JSON containing status, message, and product data
        res.json({
            status: true,
            message: products.length ? "Get All Products" : "No Products Found",
            data: products
        })
    } catch (error) {
        // If an error occurs, respond with JSON containing error message
        res.json({
            status: false,
            message: "Internal Server Error",
            data: error.message
        })
    }
}

// Controller function to get a single product by ID
export const getProductController = async (req, res) => {
    const { productId } = req.params

    try {
        // Find a product by its ID
        const product = await Product.findById(productId)

        // Respond with JSON containing status, message, and product data
        res.json({
            status: true,
            message: "Get Single Product",
            data: product
        })
    } catch (error) {
        // If an error occurs, respond with JSON containing error message
        res.json({
            status: false,
            message: "Internal Server Error",
            data: error.message
        })
    }
}

// Controller function to add a new product
export const addProductController = async (req, res) => {
    try {
        // Extract product details from request body
        const { name, price, rating, brand, postedBy } = req.body

        // Check if any required fields are missing
        if (!name || !price || !rating || !brand || !postedBy) {
            return res.json({
                status: false,
                message: "Missing Fields"
            })
        }

        // Create a new product using the provided details
        const product = await Product.create({
            name,
            price,
            rating,
            brand,
            postedBy
        })

        // Respond with JSON containing status, message, and product data
        res.json({
            status: true,
            message: "Product added successfully",
            data: product
        })
    } catch (error) {
        // If an error occurs, respond with JSON containing error message
        res.json({
            status: false,
            message: "Internal Server Error",
            data: error.message
        })
    }
}

// Controller function to update a product
export const updateProductController = (req, res) => {
    // Respond with JSON indicating that the update product functionality is not implemented yet
    res.json({
        status: true,
        message: "Update Product"
    })
}

// Controller function to delete a product by ID
export const deleteProductController = async (req, res) => {
    try {
        // Extract product ID from request parameters
        const { id } = req.params

        // Find and delete the product by its ID
        const deleteProduct = await Product.findByIdAndDelete(id)

        // Respond with JSON containing status, message, and deleted product data
        res.json({
            status: true,
            message: "Deleted Product Successfully",
            data: deleteProduct
        })
    } catch (error) {
        // If an error occurs, respond with JSON containing error message
        res.json({
            status: false,
            message: error.message
        })
    }
}
