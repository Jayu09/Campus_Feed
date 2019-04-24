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
    },
    time:{
		type : Date,
		default : Date.now
	}
});
 const storiesSchema= new schema({
    author:user,
    media:{
         type : String,
         require : true
     },
     time:{
         type : Date,
         default : Date.now
     },
     seen:[user],
     hide:{
         type : Date,
         default : new Date().setDate(new Date().getDate() + 1)
     }
 })