import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionEmail } from '../redux/actions/actionLogin';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    const { email, password } = this.state;
    const { getInfo } = this.props;
    return(
      <div>
        <h2>Login</h2>
        <Link to="/" >HOME</Link>
        <form >
          <Input
            type="text"
            name="email"
            label="Email:"
            value={ email }
            onChange={ this.handleChange }
          />
          <Input
            type="password"
            name="password"
            label="Senha:"
            value={ password }
            onChange={ this.handleChange }
          />
        </form>
        <Link to="/clients" >
          <Button
            label="Entre"
            onClick={ () => getInfo({ email, password })}
          />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInfo: (value) => dispatch(actionEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);
