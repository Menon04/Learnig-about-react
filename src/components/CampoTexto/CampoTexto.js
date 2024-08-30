import "./CampoTexto.css"

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} type="text"></input>
    </div>
  )
};

export default CampoTexto;
