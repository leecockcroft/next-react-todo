"use client"
import { useState, useEffect } from 'react';
import TodoInput from "./TodoInput"
export default function TodoState() {

const [todoState, setTodoState] = useState([])

const [todoDetails,settodoDetails]=useState({
  getFirstInput:""
})

const getData = async()=>{
  const data = await fetch('/api/node')
  const res = await data.json()
 
setTodoState(res)
console.log('data',todoState)

}

const sendData = async (todoid,info)=>{

const data = fetch('/api/node',{
  method:'POST',
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify({id:todoid,name:info})
})



}

useEffect(()=>{
  getData()
   console.log('dataafter',todoState)
},[])


const getTodoInput = (e)=>{
  console.log(e.target.value)
  settodoDetails(prev => ({...prev,getFirstInput:e.target.value}))
  console.log(todoDetails)
}


const submitTodo=()=>{
  setTodoState(prev =>({...prev, id:Date.now(),name:todoDetails.getFirstInput}))
  sendData( Date.now(),todoDetails.getFirstInput)

}
  return (
    <div>
      <TodoInput 
      getTodoInput={getTodoInput}
      submitTodo={submitTodo}/>
    </div>
  );
}