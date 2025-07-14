import users from "../model/user.model.js";
import { v4 as uuidv4} from 'uuid';


export const getAlluser = (req, res) => {
  res.status(200).json({ users });
};

export const createUser = (req, res) => {
    const newUser={
       id:uuidv4(),
       username: req.body.username,
       age: req.body.age
    }
    users.push(newUser);
    res.status(200).json({users});
};

export const updateUser = (req, res) => {
    const userid=req.params.id
    const {username, age}=req.body;

    const selecteduser=users.find(user => userid==user.id);
    if(!selecteduser){
      return res.status(404).json({meassage : 'user not found'});
    }

    selecteduser.username=username;
    selecteduser.age=age;
    res.status(200).json({users});
};

export const deleteUser =(req, res ) =>{
 
    const userid=req.params.id;
    users=users.filter((user)=> user.id!=userid);
    res.status(200).json(users);
}
