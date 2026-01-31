import EditModeLi from "./EditModeLi"

export default function TodoDisplayed({
  data,
  editToDoItem,
  editToDOItemText,
  saveEditedToDo,
deleteTodo}) {
  return (
    <main>
        <ul>
      
      {data.map((item,index)=>(

<li key={item.id}>
  
{ item.edit ? (
  <EditModeLi id={item.id}
              editToDOItemText={editToDOItemText}
              saveEditedToDo={saveEditedToDo}/> 
)  
:  
 ( <>{item.name}  
     <button onClick={()=>editToDoItem(item.id)}>Edit</button>
    <button onClick ={()=>deleteTodo(item.id)}> Delete</button>
        </>  
  )
}
  </li>

))}
      </ul>
    </main>
  );
}