import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionRegister } from '../redux/actions/actionLogin';
import Input from '../components/Input';
import Button from '../components/Button';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.validateClient = this.validateClient.bind(this);
  }

  validateClient = () => {
    const { name, email, age } = this.state;
    const { getRegister } = this.props;
    getRegister({ name, email, age });
    this.setState({
      name: '',
      email: '',
      age: '',
    })
  }

  render() {
    const { name, email, age } = this.state;
    return(
      <div>

      <form>
        <h2>Cadastro de Clientes</h2>
        <Input 
          type="text"
          name="name"
          label="Nome:"
          value={ name }
          onChange={ (e) => this.setState({ name: e.target.value })}
        />
        <Input 
          type="text"
          name="email"
          label="Email:"
          onChange={ (e) => this.setState({ email: e.target.value }) }
          value={ email }
        />
        <Input
          type="number"
          name="age"
          label="Idade:"
          onChange={ (e) => this.setState({ age: e.target.value })}
          value={ age }
        />
      </form>
          <Button
          label="Cadastrar"
          onClick={ this.validateClient }
          />
        <Link to="/clients" >
          Clientes
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRegister: (value) => dispatch(actionRegister(value)),
})

export default connect(null, mapDispatchToProps)(Register);
