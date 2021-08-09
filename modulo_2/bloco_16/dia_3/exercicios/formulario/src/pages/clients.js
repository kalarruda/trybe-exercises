import React from 'react';
import { connect } from 'react-redux';
import { actionDelete } from '../redux/actions/actionLogin';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ordened: false,
    };
    // this.ordenedNames = this.ordenedNames.bind(this);
  }
  
  clientsRegister = (array) => 
  // const { deleteRegister } = this.props // não dá certo porque precisa do {} antes
  array.map((client, index) => (
    <div key={ client.index } >
      <p><strong>ID:</strong>{index + 1}</p>
      <p><strong>Nome:</strong>{client.name}</p>
      <p><strong>Idade:</strong> {client.age}</p>
      <p><strong>Email:</strong>{client.email}</p>
      <button onClick={ () => this.props.deleteRegister(client) } >X</button>
    </div>
     )) // só dá para chamar o deleteRegister dessa forma this.props.deleteRegister 

  ordenedNames = () => {
    const { clients } = this.props; 
    const names = [...clients];
    names.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()

      let compare = 0;
      if(nameA > nameB) {
        compare = 1;
      } if (nameA < nameB) {
        compare = -1;
      }
      return compare;
    })
    return names;
  }

  render() {
    const { funcionario, clients } = this.props;
    const { ordened } = this.state;
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
          <button onClick={() => this.setState(state => ({ ordened: !state.ordened }))}>
            Ordenar por nome
          </button>
          { this.clientsRegister(ordened ? this.ordenedNames() : clients) }

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
});

const mapDispatchToProps = (dispatch) => ({
  deleteRegister: (value) => dispatch(actionDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
