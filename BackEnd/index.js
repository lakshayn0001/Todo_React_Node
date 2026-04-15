const express = require('express')
const app= express()
const dotenv = require('dotenv')
const dbConnection = require('./config/db.config.js')
dotenv.config()
const router = require('./routes/todo.Routes.js')
const cors = require('cors')

const PORT= process.env.PORT

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))

dbConnection()


app.use('/api/todo',router)

app.listen(PORT,(req,res)=>{
    console.log("working")
})