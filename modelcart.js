const mongoose = require("mongoose");
var regSchema = new mongoose.Schema({ 
    id:String,
    status:String,
    status:Number,
    total:Number,
    products:Array,
});



module.exports=mongoose.model("Carts",regSchema);