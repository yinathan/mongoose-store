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
    res.render("new.ejs")
})
// Delete
productRouter.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        res.redirect("/products")
    })
})
// Update


// Create
productRouter.post("/", (req, res) => {
  Product.create(req.body, (err, createdProduct) => {
      if(err) {
          console.log(err)
          res.send(err)
      } else {
          res.redirect("/products")
      }
  })
}) 

// Edit
productRouter.get("/:id/edit", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        res.render("edit.ejs", {product})
    })
})

productRouter.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        if(err) console.log(err)
        res.redirect(`/products/${req.params.id}`)
    })
})
// Show
productRouter.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render("show.ejs", { product });
  });
});







module.exports = productRouter;