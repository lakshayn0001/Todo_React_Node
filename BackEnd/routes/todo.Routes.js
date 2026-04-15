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
    const {title,description} = req.body;
     const todo=new Todo({title,description})
     console.log(todo)
     await todo.save()
     res.status(201).json(todo)
    }catch(error){
        res.status(500).send("Error to get data from user",error.message)
    }
})

router.get('/:id',async(req,res)=>{
try{
    const id=await Todo.findById(req.params.id)
    res.status(202).json(id)
}catch(error){
    res.send("Unable to find the mention ID",req.params.id)
}  
})

router.patch('/:id',async(req,res)=>{

    try{
        const id=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(id)
    }catch(error){
        res.status(404).send("Unable to update specific data",error)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const deleteID=await Todo.findByIdAndDelete(req.params.id)
        res.json({message:"Deleted"})
    }catch(error){
        res.status(505).send("Not able to delete",error)
    }
    
})

module.exports= router
