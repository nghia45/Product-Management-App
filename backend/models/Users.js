import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {type:String, required:true, unique: true},
    email: {type:String, require:true, unique: true},
    phone: {type:String, required:true},
    img: {type:String},
    address: {type: String, require: true},
    password: {type:String, required:true},
    isAdmin: {type:Boolean, default: false},
    isFactory: {type:Boolean, default: false},
    isStore: {type:Boolean, default: false},
    isService: {type:Boolean, default: false},
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);