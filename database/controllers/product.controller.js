import Product from '../models/product.model.js';


export const createProduct= async (req, res)=>{
   try{
    const title=req.body.title;
    const price=req.body.price;
    const rating=req.body.rating;
    const description=req.body.description;

    const newProduct=new Product({
        title : title,
        price : price,
        rating: rating, 
        description : description,
    })
    const productData=await newProduct.save();
    res.status(201).send({productData});
       
   }catch(error){
       res.status(500).send({message: error.message})
   }
};

export const getAllProducts= async (req, res)=>{
     try{
        const price=req.query.price;
        let products;

         if(price){
            products=await Product.find({price:{$gt:price}});
         }
         else{
             products= await Product.find();
         }
         
        //  const mn=req.query.mn;
        //  const mx=req.query.mx;
        //  if(mn && mx){
        //      products=await Product.find({
        //         $and:[{price : {$gte:mn}}, {price:{$lte:mx}}],
        //      });
        //  }
         
         const rating =req.query.rating;
         if(rating && price){
             products=await Product.find({
                $and:[{rating : {$gte:rating}}, {price:{$lte:price}}],
             }).sort({price:-1});
         }
         else{
            products=await Product.find().sort({price : -1});
         }



         if(products){
            res.status(200).send({
                success : true,
                message : " return all products",
                data : products,
            });
         }
         else{
            res.status(400).send({
                success : false ,
                message:"products not found",
            })
         }
     }
     catch (error){
         res.status(500).send({message: error.message})
     } 
};


export const getProductById= async (req, res)=>{
     try{
         const id=req.params.id;
         const product= await Product.findOne({ _id:id} );
        //  res.send(product);

         if(product){
            res.status(200).send({
                success : true,
                message : " return single product",
                data : product,
            });
         }
         else{
            res.status(400).send({
                success : false,
                message:"product not found",
            })
         }
     }
     catch (error){
         res.status(500).send({message: error.message})
     } 
};

export const deleteProduct=async (req, res)=>{
  try{
     const id=req.params.id;
     const deleteproduct= await Product.findByIdAndDelete({_id:id});
     
     if(deleteproduct){
            res.status(200).send({
                success : true,
                message : " delete single product",
                data : deleteproduct,
            });
         }
         else{
            res.status(400).send({
                success : false,
                message:"product not found for this id",
            });
         }

  }catch(error){
   res.status(500).send({message: error.message})
  } 
};


export const updateProduct= async (req, res)=>{
    try {
         const id=req.params.id;
         const result=await Product.findByIdAndUpdate(
            {_id:id},
            {
                $set:{
                    title:req.body.title,
                    price : req.body.price,
                    rating : req.body.rating,
                    description : req.body.description,
                },
            },
            {new:true},
        );

        if(result){
            res.status(200).send({
                success : true,
                message : "  update product successfully product",
                data : result,
            });
         }
         else{
            res.status(400).send({
                success : false,
                message:"product not found for this id",
            });
         }
         
    } catch (error) {
         res.status(500).send({message: error.message})
    }
};
