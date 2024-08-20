import React, { useContext } from "react"
import ReactDOM from "react-dom"
import './Modal.css'
import { TodoContex } from "../../TodoContext/TodoContex"
function Modal({children}){

    const {setOpenModal} = useContext(TodoContex);

    return ReactDOM.createPortal (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={()=>{
                    setOpenModal(false)
                }}>&times;</span>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}
export {Modal}