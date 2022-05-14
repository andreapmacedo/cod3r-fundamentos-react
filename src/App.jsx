/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css"

// export default function App(props) {
//   return (
//     <div id="app">
//       <Fragmento/>
//       <ComParametro
//         titulo="Situação do Aluno"
//         aluno="Pedro" nota={9.3}
//       />
//       <Primeiro/>
//     </div>
//   );
// }

// Como função anonima
// export default function (props) {
//   return (
//     <div id="app">
//       <Fragmento/>
//       <ComParametro
//         titulo="Situação do Aluno"
//         aluno="Pedro" nota={9.3}
//       />
//       <Primeiro/>
//     </div>
//   );
// }

// Como arrow function
// export default (props) => {
//   return (
//     <div id="app">
//       <Fragmento/>
//       <ComParametro
//         titulo="Situação do Aluno"
//         aluno="Pedro" nota={9.3}
//       />
//       <Primeiro/>
//     </div>
//   );
// }

// Sem Parametro
// export default _ => {
//   return (
//     <div id="app">
//       <Fragmento/>
//       <ComParametro
//         titulo="Situação do Aluno"
//         aluno="Pedro" nota={9.3}
//       />
//       <Primeiro/>
//     </div>
//   );
// }

// Com retorno implicito
// export default _ =>
//   <div id="app">
//     <Card titulo="Exemplo de Card" />
//     <Aleatorio min={1} max={60}/>
//     <Fragmento/>
//     <ComParametro
//       titulo="Situação do Aluno"
//       aluno="Pedro" nota={9.3}
//     />
//     <Primeiro/>
//   </div>

// export default _ =>
//   <div id="app">
//     <Card titulo="#04 - Desafio Aleatório">
//       <Aleatorio min={1} max={60}/>
//     </Card>
//     <Card titulo="#03 - Fragmento">
//       <Fragmento/>
//     </Card>
//     <Card titulo="#02 - Com Parametro">
//       <ComParametro
//         titulo="Situação do Aluno"
//         aluno="Pedro" nota={9.3}
//       />
//     </Card>
//     <Card titulo="#01 - Primeiro Componente">
//       <Primeiro/>
//     </Card>
//   </div>

// export default _ =>
//   <div className="App">
//     <div className="Cards">
//       <Card titulo="#04 - Desafio Aleatório">
//         <Aleatorio min={1} max={60}/>
//       </Card>
//       <Card titulo="#03 - Fragmento">
//         <Fragmento/>
//       </Card>
//       <Card titulo="#02 - Com Parametro">
//         <ComParametro
//           titulo="Situação do Aluno"
//           aluno="Pedro" nota={9.3}
//         />
//       </Card>
//       <Card titulo="#01 - Primeiro Componente">
//         <Primeiro/>
//       </Card>
//     </div>
//   </div>

export default _ =>
  <div className="App">
    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#080">
        <Aleatorio min={1} max={60}/>
      </Card>
      <Card titulo="#03 - Fragmento">
        <Fragmento/>
      </Card>
      <Card titulo="#02 - Com Parametro">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro" nota={9.3}
        />
      </Card>
      <Card titulo="#01 - Primeiro Componente">
        <Primeiro/>
      </Card>
    </div>
  </div>