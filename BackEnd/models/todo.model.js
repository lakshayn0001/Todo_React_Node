const mongoose = require('mongoose')

const todo = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    markedas:{
        type:Boolean,
        default: false
    }
})


const models=mongoose.model('Todo',todo)

module.exports= models
