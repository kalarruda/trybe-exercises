import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
  }
  
  handleButtonTwo() {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  }
  
  handleButtonThree() {
    // A única coisa diferente é a desconstrução.
    // Apenas um método diferente de fazer a mesma coisa
    // do que foi feito nas funções anteriores.
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }));
  }
  
  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    console.log(this.state.clicksBtnOne);
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1 | Count = {clicksBtnOne}</button>
        <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {clicksBtnTwo}</button>
        <button onClick={ this.handleButtonThree }>Botão 3 | Count = {clicksBtnThree}</button>
      </div>
    );
  }
}

export default App;