import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    {
    customerName: {type:String, required:true},
    phoneNumber:{type:String, required:true},
    address: {type: String,required:true},
    email: {type: String,required: true},
    productId:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    amount:{type:Number, require: true},
    status: {type: String, required: true},
    WarrantyTime:{type: Number, default: 0},
    storeId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
   },
   {
    timestamps: true,
   }
);

export default mongoose.model("Order", orderSchema);