  // App.js
  import React, { Component } from 'react';
  import ValidEmail from './components/ValidEmail';
  import './App.css';
  
  class App extends Component {
    constructor() {
      super();

      this.state = {
        email: '',
        saveEmail: '',
      }
    }

    changeEmail(value) {
      this.setState({
        email: value,
      })
      console.log('changeEmail',value);
    }

    changeSaveEmail(value) {
      this.setState({
        saveEmail: value,
        email: '',
      })
      console.log('changeSaveEmail',value);
    }

    render() {
      const { email, saveEmail } = this.state;
      return (
        <div className="App">
          <label htmlFor="id-email">
            Email
          </label>
          <input 
            id="id-email"
            value= { email }
            type="email"
            onChange= { (e) => this.changeEmail(e.target.value)}
          />
          <input id="btn-send"
            type="button"
            data-testid="id-send"
            value="Enviar"
            onClick={ () => this.changeSaveEmail(email)} // porque tem essa callback aqui
          />
          <input id="btn-back" type="button" value="Voltar" />
          <ValidEmail email={saveEmail}/>
          {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
        </div>
      );
    }
  }
  
  export default App;