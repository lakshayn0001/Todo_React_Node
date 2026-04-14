

import { useState } from 'react'
import './App.css'
import { Creating } from './Todo_Creation/Creating'
import TodoData from './Todo_Creation/TodoData'
import { useEffect } from 'react'

function App() {

const [data,setData]=useState(()=>{
  const store=localStorage.getItem("todo")
  return store ? JSON.parse(store): []
})

const handleData=(e)=>{
  setData([...data,e])
}

useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(data))
},[data])

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