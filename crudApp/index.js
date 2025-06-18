const express= require('express');
const mongoose=require('mongoose'); 
const dotenv = require('dotenv');

//including models
const Product=require('./models/product.model.js');

const app=express()
dotenv.config();


//middleware
app.use(express.json());

//for form type data inputs to post the data in fromat of form in testing we can use a express middleware
app.use(express.urlencoded({extended: false}));

const MONGO_URI=process.env.MONGO_URI;
const PORT=3000


app.get('/',(req,res)=>{
    res.send('hello from node API');
});


//to save user data we are using post
app.post('/api/products',async (req,res)=>{
    try{
        const newProduct=await Product.create(req.body);
        res.status(200).json(newProduct);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});



//to get all priducts
app.get('/api/getproducts', async (req,res)=>{
    try{
        const gettingProduct = await Product.find({});
        res.status(200).json(gettingProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})



//to get a speciifc product based on id
app.get('/api/getproducts/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const specificProduct= await Product.findById(id);
        res.status(200).json(specificProduct);
    }catch(error){
        res.status(500).json({message:erro.message});
    }
})

//update product
app.put('/api/updateproducts/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const updatedProduct=await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedProduct){
            return res.status(404).json({message:'Product not found'});
        }
        res.status(200).json('Product deleted successfully');
    }catch(error){
        res.status(500).json({message:error.message});
    }
})


//delete product
app.delete('/api/deleteproducts/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const deletedProduct=await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(500).json('Product not found');
        }
        res.status(200).json(deletedProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//mongoose connectiond
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Mongoose got connected");
        //databse connected then connecteing to server
        app.listen(PORT, ()=>{
            console.log(`server is listening to port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log('Mongoose connection failed');
    });