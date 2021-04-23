let custo = prompt("Valor de custo:");
let venda = prompt("Valor de venda:");
let quantidade = prompt("Quantidade vendida:");

//terá que vender mil produtos
let custoMil = custo * 1000;//10.000
let vendaMil = venda * 1000;//15.000

let custoComTaxa = custoMil * 1.2;//valor vezes 20% = 2.000

let lucro = (vendaMil - custoComTaxa)* quantidade;//15.000 - 12.000 

if(custo<0 && venda<0 && quantidade<0 ){
    console.log("Erro, valor menor que zero.");
}else{
    console.log("R$ "+lucro);//3.000
}


