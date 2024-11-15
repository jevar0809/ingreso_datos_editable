//herramientas
import {v4 as uuidv4 } from 'uuid'
import { useState } from "react";

//iconos
import { FaEyeSlash, FaEye, FaPlusSquare, FaCheckSquare, FaSquare } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

//estilos
import './index.css'








export const Header = ({mostrarCompletadas, setMostrarCompletadas, tareas})=>{
    
    const cambiarEstadoDeCompletadas = ()=>{setMostrarCompletadas(!mostrarCompletadas)}
    
    
    return(
        <header className="header">

            <h1 className="header__titulo">LISTA DE TAREAS</h1>
            
            
            {
                tareas.length==0?
                    <></>
                    : 
                    mostrarCompletadas ?
                        <button 
                            className="header__boton"
                            onClick={cambiarEstadoDeCompletadas}
                            > No Mostrar 'tareas realizadas' <FaEyeSlash className="header__icono-boton"/>
                        </button>
                        :
                        <button 
                            className="header__boton"
                            onClick={cambiarEstadoDeCompletadas}
                            > Mostrar 'tareas realizadas' <FaEye className="header__icono-boton"/>
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
        } else {alert('por favor, ingrese una tarea')}
        
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











export const Lista_de_tareas = ({tareas, setTareas, mostrarCompletadas})=>{

    return(
        <ul className='lista-tareas'>
            {
                tareas.length==0?
                    <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
                    :
                    tareas.map(tarea=>{
                        if(mostrarCompletadas){
                            return (
                                <Tarea 
                                    key={tarea.id}
                                    tarea={tarea.tarea} 
                                    completada={tarea.completada}
                                    id={tarea.id}
                                    tareas={tareas}
                                    setTareas={setTareas}
                                />
                            )
                        } else if(!tarea.completada){
                            return (
                                <Tarea 
                                    key={tarea.id}
                                    tarea={tarea.tarea} 
                                    completada={tarea.completada}
                                    id={tarea.id}
                                    tareas={tareas}
                                    setTareas={setTareas}
                                />
                            )} else return
                    })
                }
        </ul>
    )
}













const Tarea = ({setTareas, tareas, id, tarea, completada})=>{


    const [editandoTarea, setEditandoTarea] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState(tarea)



    const editarTarea = (id, nuevaTarea)=>{
        const editarArrayTareas = tareas.map(tarea=>{
            if(tarea.id===id){
                return {...tarea, tarea:nuevaTarea}

            }else return tarea
        })

        setTareas(editarArrayTareas)
        setEditandoTarea(!editandoTarea)

        console.log(tareas)

    }


    
    const toogle = (id)=>{


        const idEncontrado = tareas.map(tarea=>{
            if(tarea.id===id){
                return {...tarea, completada: !tarea.completada}
            } else return tarea
        })

        setTareas(idEncontrado)
        
    }



    const borrarTarea = (id)=>{
        const tareasConEliminacion = tareas.filter(tarea=>{
            if(tarea.id!==id){
                return tarea
            } else return
        })
    
        setTareas(tareasConEliminacion)
    
    }







    return(
        <li className="lista-tareas__tarea">
            
            {
                completada? 
                    <FaCheckSquare 
                        className="lista-tareas__icono lista-tareas__icono-check"
                        onClick={()=>{toogle(id)}}
                    /> 
                    : 
                    <FaSquare 
                        className="lista-tareas__icono lista-tareas__icono-check"
                        onClick={()=>{toogle(id)}}
                    />
            } 
            
            
            
            {editandoTarea? 
                <form className="formulario-editar-tarea">
                    <input 
                        type="text" 
                        className="formulario-editar-tarea__input"
                        value={nuevaTarea}
                        onChange={(e)=>{setNuevaTarea(e.target.value)}}
                    />
                    
                    <button 
                        className="formulario-editar-tarea__btn"
                        type="submit"
                        onClick={(e)=>{
                            e.preventDefault()
                            editarTarea(id, nuevaTarea)}
                        }
                    >Actualizar</button>
                    
                </form>
                :
                tarea 
            }
            
            
            
            <div className="lista-tareas__contenedor-botones">
                <CiEdit 
                    className="lista-tareas__icono" 
                    onClick={()=>{setEditandoTarea(!editandoTarea)}}
                />
                
                <MdDeleteForever 
                    className="lista-tareas__icono"
                    onClick={()=>{borrarTarea(id)}}
                />
            </div>
            
        </li>
    )
}

