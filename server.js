const express = require("express")
const app = express()
require("dotenv").config()
const methodOverride = require("method-override")
const productController = require("./controllers/products.js");
const mongoose = require("mongoose")

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride("_method"))

app.use("/store", productController)


// Mongoose connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongoose connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`port is working`))