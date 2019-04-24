const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = new schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    }
});
const msgSchema = new schema({
    sender:{
        type:String,
        require:true
    },
    seen:[user],
    content:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const chatSchema = new schema({
participate:[user],
type:{
    type:String,
    require:true
},
messages:[msgSchema],
chatName:{
    type:String,
    require:true
}
});
const chatModel=mongoose.model("chat",chatSchema);
module.exports=chatModel;