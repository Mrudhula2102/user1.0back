//userlogin.js
const mongoose=require("mongoose")

let sc=mongoose.Schema;
const logineschema = new sc({
    empid:String,
   password:String
    
});

var loginemodel =mongoose.model("employeelogin",logineschema)
module.exports =loginemodel;