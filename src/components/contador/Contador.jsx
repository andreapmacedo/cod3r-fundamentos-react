import "./Contador.css"
import React from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";
export default class Contador extends React.Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  }

  // Com contrutor
  constructor(props) {
    super(props)
  //   this.state = {
  //     numero: props.numeroInicial
  //   }
    this.inc = this.inc.bind(this) // É necessario caso não seja utilizado uma função Arrow
    this.dec = this.dec.bind(this) // É necessario caso não seja utilizado uma função Arrow
  }

  inc() {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec() {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    })
  }

  // setPasso = (e) => {
  //   this.setState({
  //     passo: +e.target.value,
  //   })
  // }

  render(){
    // return(
    //   <div className="Contador">
    //     <h2>Contador</h2>
    //     { <p>Valor Inicial: {this.props.numeroInicial} </p> }
    //     { <h3>{this.state.numero}</h3> }
    //     <div>
    //       <label htmlFor="Passo Input">Passo: </label>
    //       <input
    //         id="passoInput"
    //         type="number"
    //         value={this.state.passo}
    //         onChange={this.setPasso}
    //       />
    //     </div>
    //     {/* <button onClick={this.inc}>
    //       +
    //     </button> */}
    //     {/* caso não queira fazer o bind e esteja utilizando uma função náo Arrow */}
    //     <button onClick={e => this.inc()}>
    //       +
    //     </button>
    //     <button onClick={e => this.dec()}>
    //       -
    //     </button>
    //   </div>
    // )
    return(
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
        <Botoes setInc={this.inc} setDec={this.dec}/>
        
      </div>
    )
  }

}