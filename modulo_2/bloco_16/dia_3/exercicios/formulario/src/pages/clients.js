import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { funcionario, clients } = this.props;
    if (clients.length === 0) {
      return(
      <div>
        <h2>CLIENTES CADASTRADOS</h2>
        <p>Bem vindo: { funcionario.email }</p>
        <p>Senha: { funcionario.password }</p>
        <hr/>
        <h3>Nenhum Cliente Cadastrado</h3>
        <Link to="/register" >
          <button>Cadastrar Cliente</button>
        </Link>
      </div>)
    }
    return(
      <div>
        <h2>CLIENTES CADASTRADOS</h2>
        <p>Bem vindo: { funcionario.email }</p>
        <p>Senha: { funcionario.password }</p>
        <hr/>
          <h3>Clientes</h3>
          { clients.map((client, index) => 
          <div key={ client.index } >
            <p><strong>ID:</strong>{index + 1}</p>
            <p><strong>Nome:</strong>{client.name}</p>
            <p><strong>Idade:</strong> {client.age}</p>
            <p><strong>Email:</strong>{client.email}</p>
          </div>
           )}
        <Link to="/register" >
          <button>Cadastrar Cliente</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  funcionario: state.addInfo,
  clients: state.addRegister,
})

export default connect(mapStateToProps)(Clients);