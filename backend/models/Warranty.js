import mongoose from "mongoose";
const warrantySchema = new mongoose.Schema(
    {
    Staff: {type: String, required: true},
    status: {type: String, required: true},
    desc: {type:String, require: true},
    orderId: {type: mongoose.Schema.Types.ObjectId, ref:'Order'},
    serviceId: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
   },
   {
    timestamps: true,
   }
);

export default mongoose.model("warranty", warrantySchema);