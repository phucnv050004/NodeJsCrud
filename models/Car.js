import mongoose from "mongoose";
import Brand from "./Brand.js";

const {Schema} = mongoose;

const carSchema = new Schema({
    name:String,
    ven:{
        type:String,
        unique:true
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref:Brand
    },
    desc:String,
    dom:Date
});
export default new mongoose.model('Car',carSchema);