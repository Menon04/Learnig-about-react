import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {
  const propsholderModoficada = `${props.placeholder}...`


  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input onChange={aoDigitado} value={props.valor} required={props.obrigatorio} placeholder={propsholderModoficada} type="text"></input>
    </div>
  )
};

export default CampoTexto;
