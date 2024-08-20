import { useState } from 'react';
import './TodoItem.css'
export function TodoItem({text, completed, index, todos, setItems}){

  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = (index) => {
    setIsChecked(!isChecked);
    
    const todoUpdate = todos.map((todo, i)=>{
      if(i === index){
        return {...todo, completed: !completed}
      }
      return todo
    })
    setItems(todoUpdate)
  };


  const handlerRemoveTodo = (index) => {
    const todoUpdate = todos.filter((todo, i) => i !== index);
    setItems(todoUpdate);
  }

    return (
      <li className="task-item">
          <div className="checkbox-wrapper-15">
            <input className="inp-cbx" id={`cbx-${index}`} type="checkbox" style={{display:'none'}} checked={isChecked} onChange={()=> handleCheckboxChange(index)}/>
            <label className="cbx" htmlFor={`cbx-${index}`}>
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span className='text'>{text}</span>
              
            </label>
            <div className='icon'>
            <span className='icon' onClick={()=>{
              handlerRemoveTodo(index)
            }}>X</span>
            </div>
          </div>
      </li>
    )
  }