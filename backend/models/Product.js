import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  proId: { type: String, unique: true, require: true },
  productname: { type: String, required: true },
  image: { type: String },
  priceEach: { type: Number, required: true },
  warrantyTime: { type: String, required: true },
  type: { type: String, required: true },
});

export default mongoose.model("Product", productSchema);
