import React, { Component } from 'react';
import Input from '../components/Input';
import { connect } from 'react-redux';
import { addDataLogin } from '../redux/actions/actionLogin';
const MIN_LENGHT = 8;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({target: { name, value }}) {
    this.setState({
      [name]: value,
    })
  }

  handleClick() {
    const { addLogin } = this.props;
    const { email, password } = this.state;
    addLogin({email, password})
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

const mapDispatchToProps = (dispatch) => ({
  addLogin: (value) => dispatch(addDataLogin(value)),
});

export default connect(null, mapDispatchToProps)(Login);
