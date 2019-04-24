const mongoose = require("mongoose");
const schema = mongoose.Schema;
const subject = require("Subject")
const course = new  schema({
    code:{
        type:String,
        unique:true,
        require:true
    },
    name:{
        type :String,
        require:true
    },
    Session:{
        type:String,
        require:true
    },
    subject:[subject]
});

const courseModel=mongoose.model("course",course);
module.exports=courseModel;