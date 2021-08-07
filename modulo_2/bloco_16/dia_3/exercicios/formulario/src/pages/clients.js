import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { funcionario, cliente } = this.props;
    return(
      <div>
        <h2>CLIENTES CADASTRADOS</h2>
        <p>Olá: { funcionario.email }</p>
        <p>Senha: { funcionario.password }</p>
        <h3>Clientes</h3>
        <p>Nome: {cliente.name}</p>
        <p>Idade: {cliente.age}</p>
        <p>Email: {cliente.email}</p>
        <Link to="/register" >
          <button>ENTRE</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  funcionario: state.addInfo,
  cliente: state.addRegister,
})

export default connect(mapStateToProps)(Clients);