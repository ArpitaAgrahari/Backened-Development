const Product=require('../models/product.model');


const getproducts= async (req,res)=>{
    try{
        const products=await Product.findById({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports={
    getproducts
}