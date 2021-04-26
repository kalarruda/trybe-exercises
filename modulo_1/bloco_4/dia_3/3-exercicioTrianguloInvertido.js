//Agora inverta o lado do triângulo. Por exemplo:
//     *
//    **
//   ***
//  ****
// *****

let numbers = 5;

for (let linha =0 ; linha <=numbers ; linha +=1){  
  let asteriscos=``;
  for (let coluna = numbers ; coluna >0 ; coluna -=1){
    if(linha>=coluna){
      asteriscos += `*`;
    }
    else{
      asteriscos += ` `;
    };        
  }; 
  console.log(asteriscos);
};
 

//  let numbers = 5;

// for (let coluna =0 ; coluna <=numbers ; coluna +=1){  
//   let asteriscos=``;
//   for (let linha = numbers ; linha >=numbers-coluna ; linha -=1){
//     if(linha>=coluna){
//       asteriscos += ` `;
//     }
//     else{
//       asteriscos += `*`;
//     };        
//   }; 
//   console.log(asteriscos);
// };
 
//    *
//   ***
//  *****


// let numbers = 5;

// for (let coluna =0 ; coluna <=numbers ; coluna +=1){  
//   let asteriscos=``;
//   for (let linha = numbers ; linha >numbers-coluna ; linha -=1){
//     if(linha>=coluna){
//       asteriscos += `*`;
//     }
//     else{
//       asteriscos += ` `;
//     };        
//   }; 
//   console.log(asteriscos);
// };

// *
// **
// ***
// **  
// * 


// let numbers = 5;

// for (let coluna =0 ; coluna <=numbers ; coluna +=1){  
//   let asteriscos=``;
//   for (let linha = 0 ; linha <numbers-coluna ; linha +=1){
//     asteriscos += `*`;    
//   };
//   console.log(asteriscos);
// };

// *****
// ****
// ***
// **
// *
