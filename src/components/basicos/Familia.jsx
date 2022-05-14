import React, { cloneElement } from "react";
// import FamiliaMembro from "./FamiliaMembro"; // Necessário para a forma 1

// Forma 1
// export default function Familia(props) {
//   return(
//     <div>
//       <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
//       <FamiliaMembro nome="Ana" { ...props} />
//       <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
//     </div>
//   )
// }

// export default function Familia(props) {
//   return(
//     <div>
//       {/* { React.cloneElement(props.children) } */} 
//       {/* { cloneElement(props.children) }  */}
//       { cloneElement(props.children, props) } 
//       {/* {props.children} */}
//     </div>
//   )
// }

// export default function Familia(props) {
//   return(
//     <div>
//       {/* { React.cloneElement(props.children) } */} 
//       {/* { cloneElement(props.children) }  */}
//       { cloneElement(props.children, props) } 
//       {/* {props.children} */}
//     </div>
//   )
// }

// export default function Familia(props) {
//   return(
//     <div>
//       {
//         React.Children.map(props.children, child => {
//           return cloneElement(child, props)
//         })
//       }
//     </div>
//   )
// }

// Outra forma
// export default function Familia(props) {
//   return(
//     <div>
//       {
//         props.children.map((child) => {
//           return cloneElement(child, props)
//         })
//       }
//     </div>
//   )
// }

// Outra forma
export default function Familia(props) {
  return(
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, {...props, key: i})
        })
      }
    </div>
  )
}