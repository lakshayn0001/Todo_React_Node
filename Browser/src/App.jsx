

import { useState } from 'react'
import './App.css'
import { Creating } from './Todo_Creation/Creating'
import TodoData from './Todo_Creation/TodoData'
import { useEffect } from 'react'
import axios from 'axios'

function App() {


const handleData=async(e)=>{

  console.log("getting data from frontend",{
    title: e.title,
    description: e.description
  })

  console.log("getting another data from frontend",e)
  try{
    await axios.post('http://localhost:4000/api/todo/',e)
    alert("Todo has been added")
  }catch(error){
    alert("fail to add Todo on server",error)
  }
}


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
    <TodoData/>
  </div>
</div>
    </>
  )
}


export default App