const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = require("./users");

const Drive = new schema({
    Company_name:{
        type:String,
        require:true
    },
    JobTitle:{
        type:[String],
        require:true
    },
    
})