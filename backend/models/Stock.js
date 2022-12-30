import mongoose, { Schema } from "mongoose";
const stockSchema = new mongoose.Schema(
    {
    quantity:{type:Number, require: true},
    status:{type:String, require: true},
    productId:{type:Schema.Types.ObjectId, ref:'Product'},
    director: {type:Schema.Types.ObjectId, ref:'User'}
   }
);

export default mongoose.model("Stock", stockSchema);