import './App.css';
import bootcampLogo from './imagenes/bootcamp.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='bootcamp-logo-contenedor'>
        <img src={bootcampLogo} 
        className='boocamp-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
