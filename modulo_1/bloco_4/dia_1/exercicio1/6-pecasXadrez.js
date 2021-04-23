// let peao = ;
// let cavalo = "anda em L";
// let rainha = "diagonal, frente e lados";
// let torre = "frente e lados";
// let bispo = "diagonal";
// let rei = "frente, lados e diagonal";

let msg = prompt("Escolha a peça: ");
let peca = msg.toLowerCase();

switch (peca){
    case "peao":
        console.log("frente.");
        break;

    case "cavalo":
        console.log("move em L.");
        break;  

    case "rainha":
        console.log("diagonal, frente e lados.");
        break;  

    case "torre":
        console.log("frente e lados.");
        break;  

    case "bispo":
        console.log("diagonal.");
        break;  

    case "rei":
        console.log("frente, lados e diagonal.");
        break;  
    
    default:
        console.log("Peça não identificada.")
}