import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name : {
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    createOn:{
        type:Date,
        default:Date.now,
    },
});

const User=mongoose.model("User", userSchema)

export default User;