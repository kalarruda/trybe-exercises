// Depois, faça uma pirâmide com n asteriscos de base:

//   *
//  ***
// *****

let numbers = 5;

for (let linha =0 ; linha <=numbers ; linha +=1){  
  let asteriscos=``;
  for (let coluna = numbers ; coluna >=numbers-linha ; coluna -=1){
    if(linha<=coluna){
      asteriscos += ` `;
    }
    else{
      asteriscos += `*`;
    };        
  }; 
  console.log(asteriscos);
};


// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };