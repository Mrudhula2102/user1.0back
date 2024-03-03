const mongoose=require("mongoose")

let sc=mongoose.Schema;
const grievanceschema= new sc({
    Grievance:String, 
});

var grievancemodel=mongoose.model("grievance",grievanceschema)
module.exports =grievancemodel;