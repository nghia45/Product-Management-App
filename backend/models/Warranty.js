import mongoose from "mongoose";
const warrantySchema = new mongoose.Schema(
    {
    staff: {type: String, required: false},
    status: {type: String, required: true},
    desc: {type:String, require: false},
    orderId: {type: mongoose.Schema.Types.ObjectId, ref:'Order'},
    serviceId: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
   },
   {
    timestamps: true,
   }
);

export default mongoose.model("Warranty", warrantySchema);