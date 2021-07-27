import React from "react";
import './style.css';
import { decreaseNumber, increaseNumber } from './store';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     number: 0
  //   };
  // }

  handleIncreaseNumber = () => {
    this.props.dispatch(increaseNumber());
  }

  hadleDecreaseNumber = () => {
    this.props.dispatch(decreaseNumber());
  }

  render() {
    const { number } = this.props.getState();
    return (
      <main className="app">
        <h1>{number}</h1>
        <section className="buttons">
          <button onClick={this.hadleDecreaseNumber}>Diminui</button>
          <button onClick={this.handleIncreaseNumber}>Aumenta</button>
        </section>
      </main>
    );
  }
}

export default App;


// import React from "react";
// import "./styles.css";
// import { increaseNumber, decreaseNumber } from "./store";

// class App extends React.Component {
//   handleDecrease = () => {
//     this.props.dispatch(decreaseNumber());
//   };

//   handleIncrease = () => {
//     this.props.dispatch(increaseNumber());
//   };

//   render() {
//     const { number } = this.props.getState();
//     return (
//       <main className="app">
//         <h1>{number}</h1>
//         <section className="buttons">
//           <button onClick={this.handleDecrease}>Diminui</button>
//           <button onClick={this.handleIncrease}>Aumenta</button>
//         </section>
//       </main>
//     );
//   }
// }

// export default App;

// function sumNumber(lista) {
//   if (!lista) return 'Não foi passado parâmetro';
//   if(!Array.isArray(lista)) return 'Não é um array';
//   return lista.reduce((acc, cur) => {
//     return acc + cur 
//   },0);
// }

// function time() {
//   setTimeout(() => {
//     console.log("olaaaa")
//   }, 1000)
// }
// time();

 

// console.log(sumNumber([1,2,5]));

// module.exports = { sumNumber };