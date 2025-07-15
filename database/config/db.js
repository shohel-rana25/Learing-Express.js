
import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/testproductDB")
        console.log("db is connect ");
    } catch(error){
        console.log("db is not connect");
        console.log(error.meassage);
        process.exit(1);
    }
}

export default connectDB;