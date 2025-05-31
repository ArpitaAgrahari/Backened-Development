const express= require('express');
const app=express();

const PORT=8000

app.get('/', (req,res)=>{
    res.send('this is home page');
})

app.get('/about', (req,res)=>{
    res.send('this is about page');
})

app.get('/contact',(req,res)=>{
    res.send('this is contact page');
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
});
