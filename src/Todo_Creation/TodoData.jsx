import { useState } from "react"
import '../App.css'

const TodoData=(props)=>{

    return(
        <>
        {props.takeData.map((value,index)=>(
            <div  className="todo-container" key={index}>
            <p>{value}</p>
            <div className="todo-buttons">
                <button>Edit</button>
                <button>Close</button>
            </div>
        </div>
        ))}
        </>
    )
}

export default TodoData