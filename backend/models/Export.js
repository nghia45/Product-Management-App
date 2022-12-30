import mongoose from "mongoose";
const exportSchema = new mongoose.Schema(
    {
    quantity: {type: Number, require: true},
    productId:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    storeId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    factoryId:{type: mongoose.Schema.Types.ObjectId, rè: 'User'}
   },
   {
    timestamps: true,
   }
);

export default mongoose.model("Export", exportSchema);