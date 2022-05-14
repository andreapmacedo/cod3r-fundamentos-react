import React from "react";
import alunos from '../../data/alunos'

// export default function ListaAlunos(props){
//   return (
//     <div>
//       <ul>
//         <li>Ana - 9.7</li>
//         <li>Carlos - 9.7</li>
//         <li>Daniel - 6.5</li>
//       </ul>
//     </div>
//   );
// }

// export default function ListaAlunos(props){
//   const li1 = (
//     <li>
//       {alunos[0].id} {alunos[0].nome} -> {alunos[0].nota}

//     </li>
//     )
//   return (
//     <div>
//       <ul>
//         {li1}
//       </ul>
//     </div>
//   );
// }

export default function ListaAlunos(props){
    const alunosLi = alunos.map((aluno) => {
      return (
        <li key={aluno.id}>
          {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>
      )
    })

  return (
    <div>
      <ul style={{listStyle: "none"}}> {alunosLi} </ul>
    </div>
  );
}