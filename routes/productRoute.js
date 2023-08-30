const express = require('express');
const Product = require('../models/productModel')
const {getallProducts, getSingleProduct, updateProduct, addProduct, deleteProduct} = require('../controllers/productController')
const router = express.Router();

//get all product from ../controllers/productController
router.get('/', getallProducts)

//get single product ../controllers/productController
router.get('/:id', getSingleProduct)

//update product ../controllers/productController
router.put('/:id', updateProduct)

//add product ../controllers/productController
router.post('/', addProduct)

//delete product ../controllers/productController
router.delete('/:id', deleteProduct)

module.exports = router;
