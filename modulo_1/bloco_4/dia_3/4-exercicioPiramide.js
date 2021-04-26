// Depois, faça uma pirâmide com n asteriscos de base:

//   *
//  ***
// *****

let numbers = 5;

for (let coluna =0 ; coluna <=numbers ; coluna +=1){  
  let asteriscos=``;
  for (let linha = numbers ; linha >=numbers-coluna ; linha -=1){
    if(linha>=coluna){
      asteriscos += ` `;
    }
    else{
      asteriscos += `*`;
    };        
  }; 
  console.log(asteriscos);
};