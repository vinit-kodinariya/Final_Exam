const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_name:{
            type:String,
            trim:true
        },
        quantity:{
            type:Number,
            trim:true
        },
        is_active:{
            type:Boolean,
            default:true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"product"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
       
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const order = mongoose.model("order" , orderSchema);
module.exports = order;