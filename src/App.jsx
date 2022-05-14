/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
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

// export default _ =>
//   <div className="App">
//     <h1>Fundamentos React</h1>
//     <div className="Cards">
//       <Card titulo="#04 - Desafio Aleatório" color="#00C8F8">
//         <Familia sobrenome="Ferreira"/>
//       </Card>
//       <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
//         <Aleatorio min={1} max={60}/>
//       </Card>
//       <Card titulo="#03 - Fragmento" color="#E94C6F">
//         <Fragmento/>
//       </Card>
//       <Card titulo="#02 - Com Parametro" color="#E8B71A">
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

// export default _ =>
//   <div className="App">
//     <h1>Fundamentos React</h1>
//     <div className="Cards">
//       <Card titulo="#04 - Desafio Aleatório" color="#00C8F8">
//         <Familia sobrenome="Ferreira" >
//           <FamiliaMembro nome="Pedro" />
//           {/* <FamiliaMembro nome="Ana" />
//           <FamiliaMembro nome="Gustavo" />         */}
//         </Familia>
//       </Card>
//       <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
//         <Aleatorio min={1} max={60}/>
//       </Card>
//       <Card titulo="#03 - Fragmento" color="#E94C6F">
//         <Fragmento/>
//       </Card>
//       <Card titulo="#02 - Com Parametro" color="#E8B71A">
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

// export default _ =>
//   <div className="App">
//     <h1>Fundamentos React</h1>
//     <div className="Cards">
//       <Card titulo="#04 - Desafio Aleatório" color="#00C8F8">
//         <Familia sobrenome="Ferreira" >
//           <FamiliaMembro nome="Pedro" />
//           <FamiliaMembro nome="Ana" />
//           <FamiliaMembro nome="Gustavo" />        
//         </Familia>
//       </Card>
//       <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
//         <Aleatorio min={1} max={60}/>
//       </Card>
//       <Card titulo="#03 - Fragmento" color="#E94C6F">
//         <Fragmento/>
//       </Card>
//       <Card titulo="#02 - Com Parametro" color="#E8B71A">
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
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#08 - Renderização condicional" color="#982395">
        <ParOuImpar numero={21}/>
        <UsuarioInfo usuario={{ nome: 'Fernando'}} />
        <UsuarioInfo usuario={{ email: 'Fer@nando.com'}} />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#FF432E">
        <TabelaProdutos/>
      </Card>
      <Card titulo="#06 - Repetição" color="#002E46">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira" >
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />        
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60}/>
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento/>
      </Card>
      <Card titulo="#02 - Com Parametro" color="#E8B71A">
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