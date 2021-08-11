import React, { Component } from 'react';
import Input from '../components/Input';
const MIN_LENGHT = 8;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target: { name, value }}) {
    this.setState({
      [name]: value,
    })
  }

  handleClick() {
    const { email } = this.state;
    console.log(email);
  }

  checkEmail() {
    const { email } = this.state;
    return /\S+@\S+\.\S+/.test(email);
  }

  checkPassword() {
    const { password } = this.state;
    return password.length >= MIN_LENGHT;
  }

  checkLogin() {
    return this.checkEmail() && this.checkPassword();
  }

  render() {
    const { email,password } = this.state;
    return (
      <div>
        <Input
          name="email"
          type="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Digite Email"
        />
        <Input
          name="password"
          type="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Senha"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ !this.checkLogin() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
