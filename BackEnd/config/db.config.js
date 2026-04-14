const mongoose= require('mongoose')


const connection=async()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("connected")
    }catch(error){
        console.log(error)
        process.exit(1)
    }
    
}

module.exports= connection