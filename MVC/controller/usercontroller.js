import users from '../model/usermodel.js';

 export const getuser=(req, res)=>{
    res.status(200).json({
        success:true,
        users,
    })
 }

export const saveuser=(req, res)=>{
    const name=req.body.name;
    const age = Number(req.body.age);
   
    const user={ name, age };
    users.push(user)

    res.status(201).json({
        success:true,
        users,
    });
};