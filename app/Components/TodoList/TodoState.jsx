"use client"
import { useState, useEffect } from 'react';
import TodoInput from "./TodoInput"
import TodoDisplayed from "./TodoDisplayed"
export default function TodoState() {

const [todoState, setTodoState] = useState([])

const [todoDetails,settodoDetails]=useState({
  getFirstInput:"",
  enterEditToDoMode:false,
  editInput:""
})

const getData = async()=>{
  const data = await fetch('/api/node')
  const res = await data.json()
 
setTodoState(res)


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
  
},[])

const getTodoInput = (e)=>{
  console.log(e.target.value)
  settodoDetails(prev => ({...prev,getFirstInput:e.target.value}))
  console.log(todoDetails)
}


const submitTodo=()=>{
  const id = Date.now()
  setTodoState(prev =>[...prev, {id,name:todoDetails.getFirstInput,edit:false} ])
  sendData( id,todoDetails.getFirstInput)


}
//spread array ...prev when adding gto array. ...item inside map spread the object

// edit mode

const editToDoItem = (id)=>{
  setTodoState( todoState.map((item,index)=>(

    item.id === id ? {...item,edit:true}  : item
  )))

 console.log(todoState)

}

const editToDOItemText=(e)=>{
  console.log(e.target.value)

  settodoDetails(prev => ({...prev,editInput:e.target.value }))
console.log(todoDetails)
}

const saveEditedToDo = (id)=>{

setTodoState(todoState.map((item,index)=>(

item.id===id ? {...item, name:todoDetails.editInput,edit:false} : item

)))

console.log('done')
}


  return (
    <div>
      <TodoInput 
      getTodoInput={getTodoInput}
      submitTodo={submitTodo}/>

      <TodoDisplayed
       data={todoState}
       editToDoItem={editToDoItem}
       editToDOItemText={editToDOItemText}
       saveEditedToDo={saveEditedToDo}/>
    </div>
  );
}