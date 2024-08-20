import { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContex } from '../../TodoContext/TodoContex'



export function TodoForm(){
    
    const {setOpenModal, todos, setItems} = useContext(TodoContex);
    const [newTodo, setNewTodo] = useState('')
    return(
        <>
            <form className='Todo__form' onSubmit={(event)=>{
                event.preventDefault()
                setItems([...todos, newTodo])
                setNewTodo('')
                setOpenModal(false)
            }}>
                <div className="form-group">
                    <input type="text" id="addTodo" placeholder=" " onChange={(event)=>{
                        const newTodo = { text: event.target.value, completed: false };
                        setNewTodo(newTodo)
                    }} />
                    <label htmlFor="addTodo">
                        Add Todo
                    </label>
                </div>
                <div className="todo__button">
                    <button type='submit' className="success">
                      Add Todo
                    </button>
                    <button type='reset' className="danger" onClick={() => { setOpenModal(false) }}>Cancel</button>
                </div>
            </form>
        </>
    )
}