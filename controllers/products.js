const express = require("express");
const Product = require("../models/product.js")
const productSeedData = require("../models/seed.js")
const productRouter = express.Router()

productRouter.get("/seed", (req, res) => {
    Product.deleteMany({}, (err, deletedProducts) => {
        Product.create(productSeedData, (err, data) => {
            res.redirect("/products")
        })
    })
})

// Index
productRouter.get("/", (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render("index.ejs", {products: allProducts})
    })
})
// New
productRouter.get("/new", (req, res) => {
    console.log("new item created")
    res.send("created new item")
})
// Delete
productRouter.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        res.redirect("/products")
    })
})
// Update


// Create
// productRouter.post("/", (req, res) => {
//   res.send("received")
// }) 

// Edit

// Show








module.exports = productRouter;