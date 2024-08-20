import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContex } from '../../TodoContext/TodoContex'
export function TodoCounter(){
   const {totalTodos, completedTodo} = useContext(TodoContex)
    return (
        <div className="footer">
          <label>Completed: {completedTodo}</label>
          <label>Pending: {totalTodos -completedTodo}</label>
          <label>Total: {totalTodos}</label>
      </div>
    )
}