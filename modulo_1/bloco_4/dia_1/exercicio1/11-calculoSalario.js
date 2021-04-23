let bruto = prompt("Digite o salário:");
let salarioBase;
let IR;
let salarioLiquido;
let descontoIR;

if (bruto <=1556.94){
    console.log("Salário base R$:"+bruto*0.92);
    salarioBase = bruto*0.92;
}
else if (bruto>=1556.94 && bruto<=2594.92){
    console.log("Salário base R$:"+bruto*0.91);
    salarioBase = bruto*0.91;
}
else if(bruto>=2594.93 && bruto<=5189.82){
    console.log("Salário base R$:"+bruto*0.89);
    salarioBase = bruto*0.89;
}
else{
    console.log("Salário base R$:"+ bruto*0.88);
    salarioBase = bruto*0.88;
}


if (salarioBase<=1903.98){
    console.log("Salário líquido é R$: "+salarioBase);
}
else if(salarioBase>=1903.99 && salarioBase<= 2826.65){
    // ((salarioBase * 0.075)-142.80 );
    descontoIR = ((salarioBase * 0.075)-142.80);
    salarioLiquido = salarioBase - descontoIR;
    console.log("Salário líquido é R$: "+salarioLiquido);
}
else if(salarioBase>= 2826.66 && salarioBase<= 3751.05){
    descontoIR = ((salarioBase* 0.15)-354.80);
    salarioLiquido = salarioBase - descontoIR;
    console.log("Salário líquido é R$: "+salarioLiquido);
}
else if(salarioBase >= 3751.05 && salarioBase <= 4664.68){
    descontoIR = ((salarioBase* 0.225)-636.13);
    salarioLiquido = salarioBase - descontoIR;
    console.log("Salário líquido é R$: "+salarioLiquido);
}
else{
    descontoIR = ((salarioBase* 0.275)-869.36);
    salarioLiquido = salarioBase - descontoIR;
    console.log("Salário líquido é R$: "+salarioLiquido);
}

// console.log("O salário líquido a receber é de R$: "+salarioLiquido);