import { useState } from 'react'
import '../App.css'

const Creating =(props)=>{

    const [takeInput,setInput]=useState("")
    

const handleInput=(e)=>{
    setInput(e.target.value)
}

const handleData=()=>{
    props.sendData(takeInput)
    setInput("")
}

    return(
        <div>
            <div id="todo">
                <input 
                onChange={(e)=>{handleInput(e)}}
                placeholder="Enter your Item" 
                type="text"
                value={takeInput}
                />
                 <button onClick={handleData} >Add</button>
            </div>
            
        </div>
    )
}

export  {Creating}