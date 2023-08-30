const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

//get all product ../models/productModel
const getallProducts =  asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//get single product ../models/productModel
const getSingleProduct = asyncHandler(async(req, res) => {
    try {
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    //    res.status(500).json({message: error.message}) 
    }
})

//update product ../models/productModel
const updateProduct =  asyncHandler(async(req, res) => {
    try {
       const {id} = req.params;
       const product = await Product.findByIdAndUpdate(id, req.body);
       if(!product){
        res.status(404)
        throw new Error(`cannot find any product with ID ${id}`) 
       // return res.status(404).json({message: `cannot find any product with ID ${id}`}) 
       } 
       const updatedProduct = await Product.findById(id);
       res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//add product ../models/productModel
const addProduct = asyncHandler(async(req, res) =>{
    try {
        const product = await Product.create(req.body)
         res.status(200).json(product);
            
        } catch (error) {
            // console.log(error.message);
            res.status(500)
            throw new Error(error.message)
        }
    
    })

    //delete product ../models/productModel
    const deleteProduct = asyncHandler(async(req, res) =>{
        try {
           const {id} = req.params;
           const product = await Product.findByIdAndDelete(id);
           if(!product){
            res.status(404)
            throw new Error(`cannot find any product with ID ${id}`) 
           } 
           res.status(200).json(product);
          } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
    })

module.exports = {
    getallProducts,
    getSingleProduct,
    updateProduct,
    addProduct,
    deleteProduct
}