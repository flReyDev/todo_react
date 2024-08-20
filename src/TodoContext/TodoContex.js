import React, { useState } from "react";
import { useLocalStorage } from "../utils/LocalStorageHelper";
import { FilteringSearch } from "../utils/SearchFiltering";

const TodoContex = React.createContext();

function TodoProvider({children}){

  const [searchValue, setSearchValue] = useState('')
  const {
    item: todos,
    saveItem: setItems,
    loading,
    error} = useLocalStorage('TODOS_V1', []) //useState(parsedTodos)

    const [openModal, setOpenModal] = useState(false)



  const {searchedItems} = FilteringSearch(todos, searchValue)
  //Estado para busqueda de de TODOS
  const searchedTodos =  searchedItems();

  //Variables para el componente TodoCounter
  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length
    
    return (
        <TodoContex.Provider value={{
            searchValue,
            setSearchValue,
            todos,
            setItems,
            loading,
            error,
            totalTodos,
            completedTodo,
            searchedTodos,
            openModal, 
            setOpenModal
        }}>
            {children}
        </TodoContex.Provider>
    )
}

export {TodoContex, TodoProvider}