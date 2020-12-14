const mongoose = require("mongoose");

const { Schema } = mongoose;
const cafeteriaSchema = new Schema({
    cafeterianame:{
        type:String
    },
    isSpicy: {
        type: Boolean,
        default:false
      },
      hasSoup: {
        type: Boolean,
        default:false
      },
      price:{
        type:Number
      },
      url: {
        type: String
      },
      isReserve:{
          type:Boolean,
          default:false
      },
      people_come:{
          type:Number
      },
      time_come:{
          type:String
      },
      time:{
          type:String
      }
});

module.exports = mongoose.model("Cafeteria", cafeteriaSchema);