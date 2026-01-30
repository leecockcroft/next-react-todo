export default function TodoInput({getTodoInput,submitTodo}) {
  return (
    <div>
          <input type="text" onChange={getTodoInput}/> <button onClick={submitTodo}> Submit </button>
    </div>
  );
}