

import { useState } from 'react'
import './App.css'
import { Creating } from './Todo_Creation/Creating'
import TodoData from './Todo_Creation/TodoData'

function App() {

const [data,setData]=useState([])

const handleData=(e)=>{
  setData([...data,e])
}

console.log(data)
  return (
    <>
    <div id='main_item'>
  <div>
    <div>Todo List</div>
    <div>
      <Creating sendData={handleData}/>
    </div>
  </div>

  <div>
    <TodoData takeData={data}/>
  </div>
</div>
    </>
  )
}


export default App