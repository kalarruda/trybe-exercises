const numbers = [50, 85, -30, 3, 15];

const getBigger = () => {
  let bigNumber = '';
  for (let index = 0; index < numbers.length; index += 1) {
    if (bigNumber === '' || bigNumber < numbers[index]) {
      bigNumber = numbers[index];
    }    
  }
  return bigNumber;
};
console.log(getBigger());

//  ---------------------- usando o reduce ----------------------------

// const getBiggerReduce = (result, number) => {
//   if (result > number) {
//     return result;
//   }
//   return number;
// }

const getBiggerReduce = (result, number) => (result > number) ? result : number;  

const bigger = numbers.reduce(getBigger);
console.log(bigger);
