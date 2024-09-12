const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose');
const Todo = require('./Todo.Models') 


//Execute express 
const app = express(); 

//Middlewares
app.use(express.json()); 
app.use(cors({
        origin:{"https://todo-app-livid-alpha.vercel.app/"},
        methods:{"POST" , "GET"},
        credentials:true
})); 

const port = 4001; 
const connectionString = 'mongodb://localhost:27017/todos'; 
mongoose.connect(connectionString)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));

app.get('/' , (req,res)=>{
        res.json("Hello");
});
        //This is the section with all the api routes
        app.get('/todo' , async(req,res)=>{
                const todos = await Todo.find();
                res.json(todos);
        });


        app.post('/todo/new' , async(req,res)=>{
                const newTask  = await Todo.create(req.body);
                res.status(201).json({newTask});
        })
        
        app.delete('/todo/delete/:id', async(req,res)=>{
                const result  = await Todo.findByIdAndDelete(req.params.id);
                res.json(result)
        })
app.listen(port, () => console.log(`Server is running on port ${port}`)); 
