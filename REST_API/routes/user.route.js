import express from "express";
import { createUser, getAlluser, updateUser,deleteUser } from "../controller/user.controller.js";

const router = express.Router();

router.get('/', getAlluser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
