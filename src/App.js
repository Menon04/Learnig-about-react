import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
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
      <Time nome="Front-End"/>
      <Time nome="Back-End"/>
    </div>
  );
}

export default App;
