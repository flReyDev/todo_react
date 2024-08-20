import { useContext, useState } from 'react'
import './CreateTodo.css'
import { TodoContex } from '../../TodoContext/TodoContex'
export function CreateTodo(){
    /*Estados de mostrar y ocultar componentes */
    const [displayAdd, setDisplayAdd] = useState(false)
    const [displaySearch, setDisplaySearch] = useState(false)

    const {searchValue, setSearchValue, todos, setItems} = useContext(TodoContex) 


    return (
        <>
            <div className='title'>
                <h1>TODO</h1>
            </div>
            <div className='button-gropu'>
                <button onClick={()=>{ 
                    setDisplaySearch(!displaySearch) 
                    setDisplayAdd(false)
                    }}>Search Todo</button>
                <button onClick={()=>{ 
                    setDisplayAdd(!displayAdd) 
                    setDisplaySearch(false)
                    }}>Add Todo</button>
            </div>
            <input 
                type="text" 
                className={displayAdd ? "task-input-add active" : "task-input-add" }  
                placeholder="+ Add task"
                onKeyDown={(event)=>{
                    if(event.key === 'Enter'){
                        const newTodo = { text: event.target.value, completed: false };
                        setItems([...todos, newTodo])
                        event.target.value = '';
                    }
                }}
                />
            <input 
                type="text" 
                className={displaySearch ? "task-input-search active": "task-input-search"} 
                placeholder="Search todo"
                value={searchValue}
                onChange={(event)=>{
                    setSearchValue(event.target.value)
                }}
                />
        </>
        
    )
}