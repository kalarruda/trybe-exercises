let a = 3;
let b = 5;

function mult(x,y){
    let valor = x*y;
    return valor;
};

let multiplicacao = a*b;

console.log("O valor da multiplição é: "+ multiplicacao);

console.log(`\nO valor com function é: ${mult(a,b)}`);