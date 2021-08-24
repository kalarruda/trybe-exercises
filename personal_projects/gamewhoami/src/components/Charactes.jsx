// import { useContext, useState } from "react";
// import GameContext from "../context/GameContext";

// function Characters() {
//   const { characters } = useContext(GameContext);
//   // const { olhos, pele } = characters;
//   const { filterEyes, filterSkin } = useContext(GameContext);

//   const filterCharacters = (inputEyes, inputSkin) => {
//     let filtered=[...characters];
//     if(inputEyes) {
//       filtered = filtered.filter(({ olhos }) => olhos === inputEyes)
//     }
//     if(inputSkin) {
//       filtered = filtered.filter(({ pele }) => pele === inputSkin)
//     }
//     return filtered;
//   }

//   return(
//     <div>
//       <div>
//         {filterCharacters(filterEyes, filterSkin).map(({ nome, olhos, pele }, index) => (
//           <div key={index}>
//             <br></br>
//             <spam>{ `NOME: ${nome} - OLHOS: ${olhos} - PELE: ${pele}` }</spam>
//           </div>))}
//       </div>
//     </div>
//   )
// }

// export default Characters;
