import ReactDOM from 'react-dom/client'
import { Header, Formulario, Lista_de_tareas } from './componentes'
import { useState } from 'react'

const ROOT = ReactDOM.createRoot(document.getElementById('root'))





const App = ()=>{
  
  const [mostrarCompletadas, setMostrarCompletadas ] = useState(true)
  
  const [tareas, setTareas] = useState([])
  
  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
      <Formulario tareas={tareas} setTareas={setTareas}/>
      <Lista_de_tareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  )
}






ROOT.render(
  <App/>
)
