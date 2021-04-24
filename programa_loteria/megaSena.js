
randomNumber1 = Math.ceil(Math.random()*60);//faz um valro aleatório com Random até 60 unidades (com * 60) e arredonda o valor cima com o ceil
randomNumber2 = Math.ceil(Math.random()*60);
randomNumber3 = Math.ceil(Math.random()*60);
randomNumber4 = Math.ceil(Math.random()*60);
randomNumber5 = Math.ceil(Math.random()*60);
randomNumber6 = Math.ceil(Math.random()*60);

let megaSena = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5,randomNumber6];

let aposta1 = [1 , 2, 3, 4 ,5 ,6];
let aposta2 = [22 ,60, 11, 8 ,15 ,10];

let totalApostas = [aposta1, aposta2];


for (let totaisJogos = 0 ; totaisJogos < totalApostas.length ; totaisJogos +=1){//lista de jogos
    let acertos = 0;
    for (let jogoMega = 0 ; jogoMega < megaSena.length ; jogoMega += 1){//números mega sena
        for(let jogoAposta = 0 ; jogoAposta < totalApostas[totaisJogos].length ; jogoAposta +=1){//números de todos os jogos
            if (totalApostas[totaisJogos][jogoAposta] === megaSena[jogoMega]){
                acertos +=1;
            };
        };

    };
console.log (`Valores apostados: ${totalApostas[totaisJogos]}`);
console.log(`jogo da mega sena: ${megaSena}`);
console.log (`Número acertos: ${acertos}`);
console.log(`------------------------------`);
};

// PRIMEIRA TENTATIVA ERRADA ------------------------------------------------------------

// for (let totaisJogos = 0 ; totaisJogos < totalApostas.length ; totaisJogos +=1){//lista de jogos
//     let acertos = 0;
//     for (let jogoMega = 0 ; jogoMega < megaSena.length ; jogoMega += 1){//números mega sena
//         for(let jogoAposta = 0 ; jogoAposta < aposta1.length ; jogoAposta +=1){//números de todos os jogos
//             if (totalApostas[jogoAposta]===megaSena[jogoMega]){
//                 acertos +=1;
//             };
//         };

//     };
// console.log (`Valores apostados: ${totalApostas[totaisJogos]}`);
// console.log(`jogo da mega sena: ${megaSena}`);
// console.log (`Número acertos: ${acertos}`);
// console.log(`------------------------------`);
// };
