import React, { Component } from 'react';


class Forms extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    }
  }

  handleChange({ target }) {
    // console.log(event.target.value);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value, // transforma o "name" em algo genérico para todos usarem
    })
  }
 

  render() {
    return (
      <div className="forms-container">
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea  name="estadoFavorito" 
                value={ this.state.estadoFavorito } 
                onChange={ this.handleChange } 
              />
          </label>
          <label>
            Idade
            <input type="number" 
              name="idade" 
              value={ this.state.idade } 
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Vai comparecer:
              <input type="checkbox" 
              name="vaiComparecer" 
              value={ this.state.vaiComparecer }
              onChange={ this.handleChange }
            />
          </label>          
        </form>
      </div>
    )
  }
}


export default Forms;