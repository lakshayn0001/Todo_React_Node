import { useState } from "react"
import '../App.css'
import axios from 'axios'
import { useEffect } from "react"

const TodoData=()=>{

    const [api,setApi]=useState([])

useEffect(()=>{
    const data=async()=>{
    try{
        const res= await axios.get('http://localhost:4000/api/todo/')
        setApi(res.data)
    }
    catch(error){
        console.log("error to getting data from api")
    }
}
data()

},[api]) 

const handleDelete=async(e)=>{
    try{
        console.log(e)
        alert(`${e.title} has been deleted`)
        await axios.delete(`http://localhost:4000/api/todo/${e._id}`)
    }catch(error){
        alert("Unable to delete the mention item",e.title)
    }
}


    return(
        <>
        {api.map((value,index)=>(
            <div  className="todo-container" key={index}>
            <p>{value.title}</p>
            <div className="todo-buttons">
                <button>Edit</button>
                <button onClick={()=>{handleDelete(value)}}>Close</button>
            </div>
        </div>
        ))}
        </>
    )
}

export default TodoData