const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the name of the product"]
    },
    description:{
        type:String,
        required:[true,"Please enter the description of the product"]
    },
    price:{
        type:Number,
        required:[true,"Please enter the price of the product"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],

    
})