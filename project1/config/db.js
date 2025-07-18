// import config  from "./config.js";
// import mongoose from "mongoose";

// const DB_URL=config.db.url;

// mongoose.connect(DB_URL)
// .then(()=>{
//     console.log('mongo db is connect');
// })
// .catch(()=>{
//     console.log('error');
//     process.exit(1);
// })

// config/db.js


import mongoose from 'mongoose';
import  config  from './config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
