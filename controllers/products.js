const express = require("express");
const Product = require("../models/product.js")
const productSeedData = require("../models/seed.js")
const productRouter = express.Router()

// Index

// New

// Delete

// Update


// Create
productRouter.post("/products", (req, res) => {
  res.send("received")
}) 

// Edit

// Show








module.exports = productRouter