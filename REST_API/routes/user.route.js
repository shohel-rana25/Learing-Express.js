import express from "express";
const router = express.Router();


router.get('/users', (req, res)=>{
 res.status(200).json({users});
});

export default router;