import express from 'express'
const router=express.Router();
import { getuser, saveuser } from '../controller/usercontroller.js';

router.get('/users', getuser)
router.post('/users', saveuser)

export default router;

