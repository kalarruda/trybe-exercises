//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// numbers =7;

// for (let coluna =0 ; coluna <=numbers ; coluna +=1){  
//     let asteriscos=``;
//     for (let linha = numbers ; linha >=numbers-coluna ; linha -=1){
//       if(linha>=coluna){
//         asteriscos += ` `;
//       }
//       else if(coluna==5 && linha==(numbers+1)-coluna || coluna==6 && linha%2==0 ){
//         asteriscos += ` `;
//       } 
//       else if( coluna>linha){
//         asteriscos += `*`;
//       }            
//     };  
//     console.log(asteriscos);
//   };

  let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
