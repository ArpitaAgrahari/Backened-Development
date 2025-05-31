const express= require('express');
const app=express();

const PORT=8000

app.use(express.json());  //middleware for parsing



let todo=[];
const {v4:uuidv4}=require('uuid');



//create a todo

app.post('/todo',(req,res)=>{
    const title=req.body;
    if(!title){
        return res.status(404).json({error:'title is required'});
    }

    const newtodo={
        id:uuidv4(),
        title,
        completed:false,
    }
        todo.push(newtodo);
        res.status(201).json(newtodo);

});


//getting all data of todo

app.get('/gettodo',(req,res)=>{
    res.json(todo);
});


//updating todo

app.put('/todo/:id',(req,res)=>{
    const {id}=req.params;
    const {title,completed}=req.body;


    const todos=todo.find(t=>t.id===id);
    if(!todos) return res.status(404).json({error: 'todo not found'});

    if (title !== undefined) item.title = title;
if (completed !== undefined) item.completed = completed;

    res.json(todo);
});



app.delete('/todo/:id',(req,res)=>{
    const id=req.params;

    const itemtodelete=todo.findIndex(t=>t.id===id);

    if(itemtodelete==-1) return res.status(404).json({error:'todo not found'});

    const deleteitem=todo.splice(itemtodelete,1);
    res.json({message: 'Deleted succesfully', todo: deleteitem[0]});
});


app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

//normal syntax of middleware

// function middlewareFunction(req, res, next) {
//   // Do something
//   next(); // Pass control to the next middleware or route handler
// }





app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
});




