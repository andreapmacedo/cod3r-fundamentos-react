import React from "react";

// export default function ComParametro() {
//   return (
//     <div>
//       <h2>titulo</h2>
//       <h3>subtitulo</h3>
//     </div>
//   )
// }

// Com parametro
// export default function ComParametro(params) {
//   // console.log(params);
//   return (
//     <div>
//       <h2>{ params.titulo }</h2>
//       <h3>{ params.aluno }</h3>
//     </div>
//   )
// }

// export default function ComParametro(props) {
//   const sub =  props.aluno
//   return (
//     <div>
//       <h2>{ props.titulo }</h2>
//       <h3>{ sub }</h3>
//       <h3>{ props.nota }</h3>
//     </div>
//   )
// }

export default function ComParametro(props) {
  const status = props.nota >=7 ? 'Aprovado' : 'Recuperaçao'
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{ props.titulo }</h2>
      <p>{ props.aluno }</p>
      <p>{ props.nota }</p>
      <p>{ status }</p>
    </div>
  )
}