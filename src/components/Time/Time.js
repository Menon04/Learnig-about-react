import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = (props) => {
  const style = { backgroundColor: props.corSecundaria };

  return (
    <section className="time" style={style}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <Colaborador/>
    </section>
  );
};

export default Time;