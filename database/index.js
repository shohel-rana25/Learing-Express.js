import express from 'express';
import mongoose from 'mongoose';

const app=express();

// mongoose
// .connect('mongodb://127.0.0.1:27017/test')
// .then(()=>console.log("db is connect"))
// .catch((error)=>{
//     console.log("db is not connect");
//     console.log(error);
//     process.exit(1);
// });

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const productschema =new mongoose.Schema({
  title : {
    type:String,
    required : true,
  },
  price : Number,
  description : String,
  createdAt :{
    type : Date,
    default: Date.now,
  },
});

const Product=mongoose.model("Product", productschema);


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

app.get('/', (req, res)=>{
    res.send('it work');
});

app.post('/products', async (req, res)=>{
   try{
    const title=req.body.title;
    const price=req.body.price;
    const description=req.body.description;

    const newProduct=new Product({
        title : title,
        price : price,
        description : description,
    })
    const productData=await newProduct.save();
    res.status(201).send({productData});
       
   }catch(error){
       res.status(500).send({message: error.message})
   }
});

app.get("/products", (req, res)=>{
     
})

app.listen(2512 , async ()=>{
    console.log('server run');
    await connectDB();
});