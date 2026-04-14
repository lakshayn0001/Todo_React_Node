const express = require('express')
const app= express()
const dotenv = require('dotenv')
const dbConnection = require('./config/db.config.js')
dotenv.config()
const router = require('./routes/todo.Routes.js')

const PORT= process.env.PORT

app.use(express.json())
dbConnection()


app.use('/api/todo',router)

app.listen(PORT,(req,res)=>{
    console.log("working")
})