import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => novoColaboradorCadastrado(colaborador)}/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
