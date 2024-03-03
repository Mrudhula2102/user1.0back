const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://talenthrm2003:talent2004@cluster0.hmx7ags.mongodb.net/hrm?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));


let sc=mongoose.Schema;
const grischema=new sc({
    grievance:String
});

var grimodel=mongoose.model("Grievance",grischema)
module.exports=grimodel;