// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Forms extends Component {
//   constructor() {
//     super();
//     this.infoForms = this.infoForms.bind(this);

//     const brazilStates = ['RJ', 'SP', 'MG'];

//     this.state = {
//       nome: '',
//       email: '',
//       cpf: '',
//       endereco: '',
//       cidade: '',
//       estado: brazilStates,
//       tipo: '',
//       curriculo: '',
//       cargo: '',
//       descricao: '',
//     }
//   }

//   newState(name, value) {
//     this.setState ({
//       name: value,
//     })
//   }

//   // infoForms() {
//   //   const { name, value } = this.state;
//   // }



//   render() {
//     console.log(this.name)
//     return (
//       <form>
//         <h1>Formulário</h1>
//         <fieldset>
//           <input typeof='text' placeholder='Nome' onChange={this.newState} ></input>

//         </fieldset>
//       </form>
//     )
//   }
// }

// Forms.propTypes = {

// }

// export default Forms;