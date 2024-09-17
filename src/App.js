import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import { useState } from 'react';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Back-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Sience',
      corPrimaria: '#A6D157',
      corSecundaria: '#E9FFE3'
    },
    {
      nome: 'Devops',
      corPrimaria: '#F16165',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX/UI',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => novoColaboradorCadastrado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
