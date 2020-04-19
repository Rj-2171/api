const mongoose = require("mongoose");
var regSchema = new mongoose.Schema({ 
    uname:String,
    password:String,
    isUser:{
        type:Boolean,
        default:false
    },
});



module.exports=mongoose.model("Users",regSchema);