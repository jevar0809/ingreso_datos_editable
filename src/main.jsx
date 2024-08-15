import ReactDOM from 'react-dom/client'
import { Header, Formulario, Lista_de_tareas } from './componentes'

const ROOT = ReactDOM.createRoot(document.getElementById('root'))





const App = ()=>{
  return (

    <div className='contenedor'>
      <Header />
      <Formulario />
      <Lista_de_tareas />
    </div>
  )
}










ROOT.render(
  <App/>
)
