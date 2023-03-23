const mongoose = require('mongoose');
const {config} = require("dotenv")
config()

const connection = mongoose.connect(process.env.data_url)

module.exports={
    connection
}