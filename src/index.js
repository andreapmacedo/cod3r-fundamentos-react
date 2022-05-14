import ReactDOM from "react-dom";
import React from 'react'
import './index.css'
// import Primeiro from "./components/basicos/Primeior";
// import ComParametro from "./components/basicos/ComParametro";
// import Fragmento from "./components/basicos/Fragmento";
import App from './App'

// Forma 1
// const element = document.getElementById('root')
// ReactDOM.render('Olá React!!!', element)

// Forma 2
//ReactDOM.render('Olá React!!!', document.getElementById('root'))

// Forma 3 (com jsx)
// ReactDOM.render(
//   <div>'Olá React!!!'</div>,
//   document.getElementById('root')
// )

// Forma 4 
// const tag = <strong>'Olá React!!!'</strong>
// ReactDOM.render(
//   <div>
//     { tag }
//   </div>,
//   document.getElementById('root')
// )

// Forma 5 
// ReactDOM.render(
//   <div>
//     <Primeiro/>
//     <ComParametro
//       titulo="Situação do Aluno"
//       aluno="Pedro" nota={9.3}
//     />
//   </div>,
//   document.getElementById('root')
// )

// Forma 6
// ReactDOM.render(
//   <div id="app">
//     <Primeiro/>
//     <ComParametro
//       titulo="Situação do Aluno"
//       aluno="Pedro" nota={9.3}
//     />
//     <Fragmento/>
//   </div>,
//   document.getElementById('root')
// )

// Forma 7
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)