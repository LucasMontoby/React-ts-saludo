import './App.css';

import Saludo from './Saludo';
import Alerta from './Alerta';
import Contador from './Contador';

function App() {
  return (
    <div className="App">

    <Saludo nombre="Lucas"/>

    <Alerta/>

    <Contador/>

    </div>
  );
}

export default App;
