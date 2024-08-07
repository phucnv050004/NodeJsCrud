import mongoose from "mongoose";


const brandSchema = new  mongoose.Schema({
    name:{
        type:String,
        unique:true
    }
    
    });
    export default new mongoose.model('Brand',brandSchema);