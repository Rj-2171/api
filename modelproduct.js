const mongoose = require("mongoose");
var regSchema = new mongoose.Schema({ 
        
          model_number:String,
          release_date:String,
          weight:Number,
          quantity:Number,
          price:Number,
        
});



module.exports=mongoose.model("Product",regSchema);