import logo from './logo.svg';
import './App.css';
import Ejercicio_1 from './Ejercicio_1';
import Ejercicio_2 from './Ejercicio_2';
import Ejercicio_3 from './Ejercicio_3';
import Ejercicio_4 from './Ejercicio_4';
import Ejercicio_5 from './Ejercicio_5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Componentes Sencillos Pelayogm</p>
      </header>
      <body className="App-header">
        <p>Ejercicio_1</p>
        <Ejercicio_1/>
        <br/>
        <p>Ejercicio_2</p>
        <Ejercicio_2/>
        <p>Ejercicio_3</p>
        <Ejercicio_3/>
        <p>Ejercicio_4</p>
        <Ejercicio_4/>
        <p>Ejercicio_5</p>
        <p>Disponible para busqueda: CUPRA Leon, Clase C, Austral, Tiguan, Corolla, 508, A6, XC60, Octavia, SEAT Leon, Megane, Ibiza, Ateca, Passat.</p>
        <Ejercicio_5/>
      </body>
    </div>
  );
}

export default App;
