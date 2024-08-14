import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";



export const Header = ()=>{
    return(
    <header>
        <h1>LISTA DE DATOS</h1>
        <button>No mostrar tareas realizadas <FaEyeSlash /></button>
        <button>Mostrar tareas realizadas <FaEye /></button>

    </header>

    )
}





export const Formulario = ()=>{
    return(


        <form>
            <input type="text" name="" id="" />
            <button><FaPlusSquare /></button>
            


        </form>



    )
}
