import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Todo from './Todo'
import FormTodo from './FormTodo'
import './Notepad.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Notepad() {
    const [todos, setTodos] = useState([
        {
          text: 'test',
          isDone: false
        }
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
    return (
        <div className="Notepad">
        <div className="Notepad__container">
            <div className="Notepad__top__container">
            <div className="Notepad__top">
                <div className="Notepad__inline"></div>
                 <div className="Notepad__camera">
                     <div className="Notepad__camera_part"></div>
                 </div>
             </div>
            </div>
            <div className="Notepad__body">
                <Link to='/'>
                    <div className="screen__body__power"></div>
                </Link>
                          
                  
                   <div className="Notepad__todo">
                   <FormTodo addTodo={addTodo} />
                        {todos.map((todo, index) => (
                                <Todo
                                key={index}
                                index={index}
                                todo={todo}
                                markTodo={markTodo}
                                removeTodo={removeTodo}
                                />
                        ))}
                   </div>
                
            </div>
             <div className="Notepad__bottom">
                 <div className="Notepad__bottom__name">
                     <h3>HUAWEI</h3>
                     <div className="NotepadSearch__goBack">
                         <Link to='/screen'>
                             <ArrowBackIcon style={{textDecoration:"none",color:'#fff'}} />
                         </Link>
                 </div>
                 </div>
             </div>
        </div>
    </div>
    )
}

export default Notepad
