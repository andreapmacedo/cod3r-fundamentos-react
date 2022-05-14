import React from "react";
import "./Card.css"


// export default (props) => {
// export default function Card(props){
//   return(
//     <div className="Card">
//       <div className="Title">{props.titulo}</div>
//       <div className="Content">Conteudo</div>
//     </div>
//   );
// }

// export default (props) => {
// export default function Card(props){
//   const style = {
//     // backgroundColor: '#222',
//     backgroundColor: props.color,
//   }
//   return(
//     <div className="Card" style={style}>
//       <div className="Title">{props.titulo}</div>
//       <div className="Content">{props.children}</div>
//     </div>
//   );
// }

// export default (props) => {
export default function Card(props){
  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00',
  }
  return(
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}