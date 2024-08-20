import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoList } from './components/TodosList/TodoList';
import { TodoItem } from './components/TodoItems/TodoItem';
import { CreateTodo } from './components/CreateTodos/CreateTodo';
import './App.css'
import { Content } from './components/Layout/Content';
import { useContext } from 'react'
import {TodoLoading} from './components/TodoLoading/TodoLoading';
import { TodoContex} from './TodoContext/TodoContex';
import { Modal } from './components/Modal/Modal';
import { TodoForm } from './components/TodoForm/TodoForm';
function App() {

  const {loading, error, todos, setItems, searchedTodos, openModal} = useContext(TodoContex)

  return (
    <>
        <Content>
          <CreateTodo/>
          <TodoList>
              {loading && 
                <TodoLoading/>
              }
              {error && <p>Error en carga de datos..</p>}
              {!loading && searchedTodos.length === 0 && 
                <div className='add-todo-indicator'>
                  <p>Press Add Todo!</p>
                  </div>
                  }

                {searchedTodos.map((todo, index)=>{
                  return <TodoItem 
                            text={todo.text} 
                            completed={todo.completed} 
                            index={index}
                            todos={todos} 
                            setItems={setItems}
                            key={index}
                            />
                })} 
          </TodoList>
          <TodoCounter/>
        </Content>
        
        {openModal && <Modal>
            <TodoForm/>
          </Modal>}
    </>
  );
}

export default App;
