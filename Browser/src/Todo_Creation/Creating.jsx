import { useState } from 'react'
import '../App.css'

const Creating =(props)=>{

const [takeInput,setInput]=useState({
    title:"",
    description:""
}) 

const handleInput=(e)=>{
    const {name,value}= e.target;
    setInput((prev)=>({...prev,[name]:value}))
}

const handleData=()=>{
    props.sendData(takeInput)
    setInput({
        title:"",
        description:""
    })
}

    return(
        <div>
            <div id="todo">
                <div>
                    <input 
                onChange={(e)=>{handleInput(e)}}
                placeholder="Enter the Title" 
                type="text"
                value={takeInput.title}
                name="title"
                />
                <textarea
                name='description'
                onChange={(e)=>{handleInput(e)}}
                placeholder='Enter the Description'
                value={takeInput.description}
                />
                </div>
                 <button onClick={handleData} >Add</button>
            </div>
            
        </div>
    )
}

export  {Creating}