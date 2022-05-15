/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";


export default props => {
  // let nome = '?'
  // let idade = 0
  // let nerd = false
  // ex do destructuring const [a, b] = [1, 2]
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)
  
  
  
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }
  // function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
  //   nome = nomeParam
  //   idade = idadeParam
  //   nerd = nerdParam
  //   console.log(nomeParam, idadeParam, nerdParam);
  // }


  return (
    <div>
      <div>Pai</div>
      <span>{nome} </span>
      <span><strong>{idade} </strong></span>
      <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
}