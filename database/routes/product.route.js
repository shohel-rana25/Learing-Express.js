import express from 'express'
const router =express.Router();

import {
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    createProduct
 } from '../controllers/product.controller.js';


router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;