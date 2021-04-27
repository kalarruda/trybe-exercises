let a = 15;
let b = 2;

function conta (x,y){
    let valor = x%y;
    return valor;
};

let modulo = a%b;//o valor que sobra

console.log("O valor do módulo é: "+modulo);

console.log (`\nO valor com function é: ${conta(a,b)}`);