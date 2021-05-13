import React from "react";
import './Todo.css'

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div  className="todo" style={{display:'flex',flexDirection:'column',alignItems:'center'}}  >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button  onClick={() => markTodo(index)}>✓</button>{' '}
        <button onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}
export default Todo;