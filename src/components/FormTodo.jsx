import React,{useState} from 'react'
import './FormTodo.css'
import todoimg from '../images/note-taking.png'
function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} > 
      <div className='Formtodo'>
        <div className="Formtodo__img">
          <img width='100px' style={{borderRadius:'50px'}} src={todoimg} alt=''/>
        </div>
        <h3>Todo List</h3>
        <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </div>
      <button style={{width:'90%'}} type="submit">
        Submit
      </button>
    </form>
    );
  }


  export default FormTodo;
  