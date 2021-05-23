const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// console.log(Object.entries(order));
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  const name = order.name;
  const personDelivery = order.order.delivery.deliveryPerson; //ana Silveira
  const address = order.address;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order. address.apartment;
  
  console.log(`Olá ${personDelivery}, entrega para: ${name}, telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00

const orderModifier = (order) => {  
  order.name = 'Luiz Silva';
  const name = order.name;
  order.order.pizza.margherita = 'muzzarella';
  const muzzarella = order.order.pizza.margherita;
  order.order.pizza.pepperoni = 'calabresa';
  const calabresa = order.order.pizza.pepperoni;
  const coke = order.order.drinks.coke.type;
  order.payment = '50';
  const price = order.payment;

  console.log (`Olá ${name}, o total de seu pedido de ${muzzarella}, ${calabresa} e ${coke} é de R$ ${price}`);
}

orderModifier(order);