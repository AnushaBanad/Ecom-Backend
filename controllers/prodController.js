const Product = require("../models/Product");

const getProducts = async(requestAnimationFrame,res)=> {
    try{
        const products = await Product.find();
        res.status(200).json({
            message:"Product fetched",
            products:products
        });

        }catch (error) {
            res.status(200).json({  
                message:error.message || "Internal Server Error",
            }); 
        }

    }
              const getProductById = async (req,res) => {
                try {
                    const {productId }=req.params;
                    const product = 
                }
              }                                                                      