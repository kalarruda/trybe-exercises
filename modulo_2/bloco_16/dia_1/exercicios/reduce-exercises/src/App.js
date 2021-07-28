import './App.css';
import React from 'react';
import { nextColor, previousColor, criarCor } from './store';

class App extends React.Component {

handleNextColor = () => {
  this.props.dispatch(nextColor());
}

handlePreviousColor = () => {
  this.props.dispatch(previousColor());
}
handleRandomColor = () => {
  this.props.dispatch(criarCor());
}

  render() {
    const { colors, index } = this.props.getState();
    return (
      <div id="container" style={{backgroundColor: colors[index]}} >
        <p>Color: <span id="value">{colors[index]}</span></p>
        <button id="previous" onClick={this.handlePreviousColor} >Previous color</button>
        <button id="next" onClick={this.handleNextColor} >Next color</button>
        <button onClick={ this.handleRandomColor } >Random Colors</button>
      </div>
    );
  }
}

export default App;
