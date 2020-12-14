const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;

const menuforrateSchema = new Schema({
  
  isRate:{
    type:Boolean,
    default:false
  },
  menu_name:{
    type:String
  },
  rating:{
    type:Number
  },
  url:{
    type:String
  },
  cafeteria_id:{
    type:ObjectId,
    ref: "Cafeteria"
  }

  
});

module.exports = mongoose.model("menuforrate", menuforrateSchema);