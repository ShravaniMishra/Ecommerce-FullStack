const express = require("express");

const app = express()

app.use(express.json())

// Route Imported

const {router} = require("./routes/ProductRoute")

app.use("/api/v1",router)

module.exports={
    app
}