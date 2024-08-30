import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = () => {
  
  const times = [
    'Front-End',
    'Back-End',
    'Data-Sience',
    'Devops',
    'UX/UI',
    'Mobile',
    'Inovação e Gestão'
  ]

  const onSave = (event) => {
    event.preventDefault()
    console.log('Salvando dados')
  }

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio="true" label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto obrigatorio="true" label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
