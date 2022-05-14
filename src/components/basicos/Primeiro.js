import React from "react"

//Forma 1
// export default function Primeiro() {
//   return 'Primeiro Componente'
// }

//Forma 2
// export default function Primeiro() {
  // return <h2>Primeiro Componente</h2> 
// }

//Forma 3
// export default function Primeiro() {
//   return (
//     <div>
//       <h2>Primeiro Componente</h2>
//     </div>
//   )
// }

//Forma 4
export default function Primeiro() {
  const msg = 'Seja bem vindo(a)'
  return (
    <div>
      <h2>Primeiro componente</h2>
      <p>{ msg }</p>
    </div>
  )
}