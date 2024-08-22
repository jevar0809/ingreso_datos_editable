//herramientas
import {v4 as uuidv4 } from 'uuid'
import { useState } from "react";

//iconos
import { FaEyeSlash, FaEye, FaPlusSquare, FaCheckSquare, FaSquare } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

//estilos
import './index.css'








export const Header = ({mostrarCompletadas, setMostrarCompletadas})=>{
    
    const cambiarEstadoDeCompletadas = ()=>{setMostrarCompletadas(!mostrarCompletadas)}
    
    return(
        <header className="header">

            <h1 className="header__titulo">LISTA DE TAREAS</h1>

            {
                mostrarCompletadas ? 
                <button 
                    className="header__boton"
                    onClick={cambiarEstadoDeCompletadas}
                    > Mostrar tareas realizadas <FaEye className="header__icono-boton"/>
                </button>
                :
                <button 
                    className="header__boton"
                    onClick={cambiarEstadoDeCompletadas}
                    > No Mostrar tareas realizadas <FaEyeSlash className="header__icono-boton"/>
                </button>

            }
        </header>

    )
}









export const Formulario = ({tareas, setTareas})=>{

    const [tareaIngresada, setTareaIngresada] = useState('')
    
    
    const ingresandoTarea = (e)=>{
        setTareaIngresada(e.target.value)
        //console.log(tareaIngresada)

    }

    const almacenarTarea = (e)=>{
        e.preventDefault()
        if (tareaIngresada){
            setTareas([
                ...tareas,
                {
                    id: uuidv4(),
                    tarea: tareaIngresada,
                    completada:false,

                }
            ])
        } else {
            alert('por favor, ingrese una tarea')
        }

        setTareaIngresada('')
    }




    return(


        <form className="formulario-tareas">
            
            <input 
                type="text"
                placeholder="Escribe una tarea y agregala"
                value={tareaIngresada} 
                className="formulario-tareas__input" 
                onChange={ingresandoTarea} 
            />
            
            
            <button className="formulario-tareas__btn" onClick={almacenarTarea}>
                <FaPlusSquare className="formulario-tareas__icono-btn" />
            </button>
        
        </form>
    )
}













export const Lista_de_tareas = ({tareas})=>{

    //console.log(tareas)
    return(
        <ul className='lista-tareas'>
            {
                tareas.length==0?
                    <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
                    :
                    tareas.map(tarea=>{
                        return (
                            <Tarea 
                                llave={tarea.id} 
                                tarea={tarea.tarea} 
                                completada={tarea.completada}
                            />
                        )
                    })
            }
        </ul>
    )

}













const Tarea = ({llave, tarea, completada})=>{

    return(

        <>
            <li key={llave}><FaCheckSquare/> {tarea} <CiEdit/><MdDeleteForever/></li>
            
            {/* <li> <FaSquare/> Tarea 1 <CiEdit/><MdDeleteForever/></li> */}

            
        </>
        
        
        
        



    )
}









