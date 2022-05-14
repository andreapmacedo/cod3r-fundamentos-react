import React from "react";

// export default (props) => {
//   const min = props.min
//   const max = props.max
//   const aleatorio = parseInt(Math.random() * (max - min)) + min;
//   return(
//     <div>
//         <h2>Valor Aleatório</h2>
//         <p><strong>Valor Minimo: </strong>{ min }</p>
//         <p><strong>Valor Máximo: </strong>{ max }</p>
//         <p><strong>Valor Aleatorio: </strong>{ aleatorio }</p>
//     </div>
//   );
// }

// export default (props) => {
export default function Aleatorio(props) {
  const { min, max } = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return(
    <div>
        <h2>Valor Aleatório</h2>
        <p><strong>Valor Minimo: </strong>{ min }</p>
        <p><strong>Valor Máximo: </strong>{ max }</p>
        <p><strong>Valor Aleatorio: </strong>{ aleatorio }</p>
    </div>
  );
}