/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
  const cb = props.quandoClicar
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50 
  const gerarNerd = () => Math.random() > 0.5 
  return (
    <div>
      <div>
        Filho
      </div>
      {/* Com Arrow */}
      <button onClick={e => props.quandoClicar('João', 52, true)}>
        Fornecer Informações
      </button>
      {/* Com Arrow */}
      <button onClick={_ => cb('Pedro', gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
      {/* sem Arrow */}
      {/* <button onClick={
        function (e) {
          props.quandoClicar('João', 52, true);
        } 
      }
      >
        Fornecer Informações
      </button> */}
    </div>
  );
}