import express from 'express';
import ProductRoutes from './routes/product.route.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app=express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Routes
app.use('/products',ProductRoutes );

app.get('/', (req, res)=>{
    res.send('it work');
});



const PORT=process.env.PORT || 3000;

app.listen(PORT , async ()=>{
    console.log('server run');
    await connectDB();
});












// const productschema =new mongoose.Schema({
//   title : {
//     type:String,
//     required : [true, "product title must required"],
//     minlength: [3, "minimum length is 3"],
//     maxlength: [30, "maximum length is 3"],
//     uppercase : true,
//     trim : true ,
//   },
//   price : {
//     type : Number,
//   },
//   rating :{
//      type : Number,
//   },
//   description : {
//     type : String,
//   },
//   createdAt :{
//     type : Date,
//     default: Date.now,
//   },
// });




// const connectDB=async()=>{
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/testproductDB")
//         console.log("db is connect ");
//     } catch(error){
//         console.log("db is not connect");
//         console.log(error.meassage);
//         process.exit(1);
//     }
// }


// app.post('/products', async (req, res)=>{
//    try{
//     const title=req.body.title;
//     const price=req.body.price;
//     const rating=req.body.rating;
//     const description=req.body.description;

//     const newProduct=new Product({
//         title : title,
//         price : price,
//         rating: rating, 
//         description : description,
//     })
//     const productData=await newProduct.save();
//     res.status(201).send({productData});
       
//    }catch(error){
//        res.status(500).send({message: error.message})
//    }
// });

// app.get("/products", async (req, res)=>{
//      try{
//         const price=req.query.price;
//         let products;

//          if(price){
//             products=await Product.find({price:{$gt:price}});
//          }
//          else{
//              products= await Product.find();
//          }
         
//         //  const mn=req.query.mn;
//         //  const mx=req.query.mx;
//         //  if(mn && mx){
//         //      products=await Product.find({
//         //         $and:[{price : {$gte:mn}}, {price:{$lte:mx}}],
//         //      });
//         //  }
         
//          const rating =req.query.rating;
//          if(rating && price){
//              products=await Product.find({
//                 $and:[{rating : {$gte:rating}}, {price:{$lte:price}}],
//              }).sort({price:-1});
//          }
//          else{
//             products=await Product.find().sort({price : -1});
//          }



//          if(products){
//             res.status(200).send({
//                 success : true,
//                 message : " return all products",
//                 data : products,
//             });
//          }
//          else{
//             res.status(400).send({
//                 success : false ,
//                 message:"products not found",
//             })
//          }
//      }
//      catch (error){
//          res.status(500).send({message: error.message})
//      } 
// })


// app.get("/products/:id", async (req, res)=>{
//      try{
//          const id=req.params.id;
//          const product= await Product.findOne({ _id:id} );
//         //  res.send(product);

//          if(product){
//             res.status(200).send({
//                 success : true,
//                 message : " return single product",
//                 data : product,
//             });
//          }
//          else{
//             res.status(400).send({
//                 success : false,
//                 message:"product not found",
//             })
//          }
//      }
//      catch (error){
//          res.status(500).send({message: error.message})
//      } 
// })

// app.delete('/products/:id', async (req, res)=>{
//   try{
//      const id=req.params.id;
//      const deleteproduct= await Product.findByIdAndDelete({_id:id});
     
//      if(deleteproduct){
//             res.status(200).send({
//                 success : true,
//                 message : " delete single product",
//                 data : deleteproduct,
//             });
//          }
//          else{
//             res.status(400).send({
//                 success : false,
//                 message:"product not found for this id",
//             });
//          }

//   }catch(error){
//    res.status(500).send({message: error.message})
//   } 
// })


// app.put('/products/:id',async (req, res)=>{
//     try {
//          const id=req.params.id;
//          const result=await Product.findByIdAndUpdate(
//             {_id:id},
//             {
//                 $set:{
//                     title:req.body.title,
//                     price : req.body.price,
//                     rating : req.body.rating,
//                     description : req.body.description,
//                 },
//             },
//             {new:true},
//         );

//         if(result){
//             res.status(200).send({
//                 success : true,
//                 message : "  update product successfully product",
//                 data : result,
//             });
//          }
//          else{
//             res.status(400).send({
//                 success : false,
//                 message:"product not found for this id",
//             });
//          }
         
//     } catch (error) {
//          res.status(500).send({message: error.message})
//     }
// });


