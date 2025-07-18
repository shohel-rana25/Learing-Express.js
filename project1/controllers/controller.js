import User from '../models/model.js';
import { v4 as uuidv4 } from 'uuid';


export const createmethod=async (req, res)=>{
  try {
    const newUser=new User({
        id:uuidv4(),
        name:req.body.name,
        age:req.body.age,
    })
    await newUser.save();

    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).send({message : error.message});
  }
};


export const getAllmethod=async (req, res)=>{
    try {
         const users=await User.find();
         res.status(200).json(users);
    } catch (error) {
         res.status(500).send({message : error.message});
    }  
};


export const getOnemethod= async (req, res)=>{
   try {
         const user=await User.findOne({id: req.params.id});
         res.status(200).json(user);
    } catch (error) {
         res.status(500).send({message : error.message});
    }
}


export const updatemethod = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("id  ---> ", id);
    // console.log("body --> ", req.body);

    const updateuser = await User.findOneAndUpdate(
      { id: id },  // id field uuid
      {
        $set: {
          name: req.body.name,
          age: Number(req.body.age),
        }
      },
      { new: true }
    );

    if (!updateuser) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json(updateuser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


export const deletemethod=async (req, res)=>{
  try {
    const id=req.params.id;

    const deleteuser=await User.findOneAndDelete({id:id});
    if(!deleteuser)
    {
        return res.status(404).json({message:"user not found"});
    }
    res.status(200).json({message:"successfully delete"});
  } catch (error) {
     res.status(500).send({message:error.message});
  }
}

