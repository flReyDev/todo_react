import { useContext } from 'react'
import './Content.css'
import { TodoContex } from '../../TodoContext/TodoContex'
export function Content(props){

    const {openModal, setOpenModal} = useContext(TodoContex)
    let open = false;
    return (
        <div className="container">
            {props.children}
            <div className='button-add'>
            <button onClick={(event)=>{
                setOpenModal(!open)
            }}>Add Todo</button>
            </div>
        </div>
    )
}