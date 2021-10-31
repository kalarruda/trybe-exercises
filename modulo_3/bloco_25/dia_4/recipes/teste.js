
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// function ordenar(a, b) {
//   return a.name > b.name;
// }
function ordenar(a, b) {
  return a.localeCompare(b);
}

console.log(drinks.sort((a, b) => a.localeCompare(b)))

const array = [
  { name: 'eeeee' },
  { name: 'Áaaaaaa' },
  { name: 'aaaaaaa' },
  { name: 'cccccc' },
  { name: 'bbbbbb' },
]

// const total = drinks.map(({ name }) => name.sort((a, b) => {
//   return a.localeCompare(b);
// }))
// console.log(total);

// var items = ["Cátodo", "caule", "casca"];
// items.sort(function (a, b) {
//     return a.localeCompare(b);
// });

// function ordenar(a, b) {
//   return a.name > b.name;
// }
// function ordenar(a, b) {
//   return a.localeCompare(b);
// }

// console.log(drinks.sort((a, b) => a.localeCompare(b)))
// console.log(drinks.sort(ordenar))


// app.get('/drinks', function(_req, res) {
//   const alphabeticOrder = drinks.map(({ name }).sort((a, b) => b - a));
//   return res.send(alphabeticOrder);
// });

  // const alphabeticOrder = drinks.map((drink) => drink.toLowerCase());
  // console.log(alphabeticOrder);