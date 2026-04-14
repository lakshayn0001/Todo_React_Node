const express= require('express')
const router = express.Router()

const Todo= require('../models/todo.model.js')



router.get('/',async(req,res)=>{
    try{
        const todo=await Todo.find()
        res.json(todo)
    }catch(error){
        res.status(500).send("Error to send the Data",error)
    }
})

router.post('/',async(req,res)=>{

    try{
    const [title,description] = await req.body;
     const todo=new Todo({title,description})
     await todo.save()
     res.status(201).json(todo)
    }catch(error){
        res.status(500).send("Error to get data from user",error)
    }
})

module.exports= router
