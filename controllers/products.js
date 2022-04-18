const express = require("express");
const Product = require("../models/product.js")
const productSeedData = require("../models/seed.js")
const productRouter = express.Router()

// Index
productRouter.get("/", (req, res) => {
    console.log("working")
    res.send("yo") })
    // Product.find({}, (err, allProducts) => {
    //     res.render("index.ejs", {product: allProducts})
    // })
// })
// New
productRouter.get("/new", (req, res) => {
    console.log("new item created")
    res.send("created new item")
})
// Delete

// Update


// Create
// productRouter.post("/", (req, res) => {
//   res.send("received")
// }) 

// Edit

// Show








module.exports = productRouter;