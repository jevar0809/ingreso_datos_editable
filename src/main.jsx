import ReactDOM from 'react-dom/client'
import { Header, Formulario  } from './componentes'

const ROOT = ReactDOM.createRoot(document.getElementById('root'))

const App = ()=>{






  return (

    <>
      <Header />
      <Formulario />

    </>





  )




}



ROOT.render(
  <App/>
)