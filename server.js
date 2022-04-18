const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const methodOverride = require("method-override")
const productsController = require("./controllers/products");

const mongoose = require("mongoose")
require("dotenv").config()

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride("_method"))

app.use("/products", productsController)

// Mongoose connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + "Mongo is not running"))
db.on("connected", () => console.log("Mongoose Connected"))
db.on("disconnected", () => console.log("Mongo Disconnected"))

app.listen(PORT, () => console.log("port is running"))