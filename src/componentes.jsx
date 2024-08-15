import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaPlusSquare, FaCheckSquare, FaSquare } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

import './index.css'
import { useState } from "react";





export const Header = ()=>{
    return(
    <header className="header">
        <h1 className="header__titulo">LISTA DE TAREAS</h1>
        <button className="header__boton"> Mostrar tareas realizadas <FaEye className="header__icono-boton"/></button>
    </header>

    )
}









export const Formulario = ()=>{

    const [datoCapturado, setDatoCapturado] = useState('')




    const capturaDatos = (e)=>{
        setDatoCapturado(e.target.value)
        console.log(datoCapturado)

    }

    const enviaDatoAbajo = (e)=>{
        e.preventDefault()




    }




    return(


        <form className="formulario-tareas" onSubmit={enviaDatoAbajo}>
            <input 
                type="text"
                value={datoCapturado} 
                className="formulario-tareas__input" 
                onChange={capturaDatos} 
            />
            
            
            <button className="formulario-tareas__btn">
                <FaPlusSquare className="formulario-tareas__icono-btn" />
            </button>
            


        </form>



    )
}








export const Lista_de_tareas = ()=>{
    return(
        <ul>
            <Tarea />
            <div>No hay tareas agregadas</div>
        </ul>
    )

}













export const Tarea = ()=>{
    return(

        <>
            
        </>
        
        /* 

        <li><FaCheckSquare/> Tarea 1 <CiEdit/><MdDeleteForever/></li>
            <li> <FaSquare/> Tarea 1 <CiEdit/><MdDeleteForever/></li>

        
        */


    )
}









