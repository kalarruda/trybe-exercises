let a = 30;
let b = 60;
let c = -90;

let somaAngulos = a + b +c;
let valido = true;
let invalido = false;

if (somaAngulos==180){
    console.log(valido);
}
else if(a<0 || b<0 || c<0 ){
    console.log("ERRO. Um dos ângulos é negativo.");
}
else{
    console.log(invalido);
}