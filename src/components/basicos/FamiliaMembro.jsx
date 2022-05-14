import React from "react";

// export default function FamiliaMembro(props) {
//   return(
//     <div>Pedro <strong>Silva</strong></div>
//   )
// }

export default function FamiliaMembro(props) {
  return(
    <div>{props.nome} <strong>{props.sobrenome}</strong></div>
  )
}