import mongoose from 'mongoose';

const productschema =new mongoose.Schema({
  title : {
    type:String,
    required : [true, "product title must required"],
    minlength: [3, "minimum length is 3"],
    maxlength: [30, "maximum length is 3"],
    uppercase : true,
    trim : true ,
  },
  price : {
    type : Number,
  },
  rating :{
     type : Number,
  },
  description : {
    type : String,
  },
  createdAt :{
    type : Date,
    default: Date.now,
  },
});
const Product=mongoose.model("Product", productschema)

export default Product;