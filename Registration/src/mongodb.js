const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/registration")
.then(()=> {
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const RegisterSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },

    lname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
    },

    gender:{
        type:radio,
        required:true
    },

    knownlang:{
        type:checkbox,
        required:true
    }
})

const Collection =new mongoose.model("Newuser",RegisterSchema)

module.exports=Collection