const {app} = require('./app')

const {config} = require('dotenv')

const {connection} = require('./Config/database')

config()

// dotenv.config=()

connection

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port : ${process.env.PORT}`)
})