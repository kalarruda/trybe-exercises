//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let inicio=0;

for (let valor1 = 1; valor1 < numbers.length; valor1 += 1) {
    for (let valor2 = 0; valor2 < valor1; valor2 += 1) {
      if (numbers[valor1] > numbers[valor2]) {
        inicio = numbers[valor1];
        numbers[valor1] = numbers[valor2];
        numbers[valor2] = inicio;
      };
    };    
  };

  console.log(numbers)


