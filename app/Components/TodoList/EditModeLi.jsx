export default function EditModeLi({editToDOItemText,saveEditedToDo,id}) {
  return (
    <> <input type="text" onChange={editToDOItemText}/> <button onClick={()=>saveEditedToDo(id)}> Save</button></> )




  
}