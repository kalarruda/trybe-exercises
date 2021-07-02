import React from 'react';
import InputForms from './InputForms';
import Button from './Button';

class FirstFieldSet extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
    }
  }

  handleChangeName = (e) => {
    const { value } = e.target;
    this.setState({
      nome: value.toUpperCase(),
    })    
  }

  handleChangeEmail = (e) => {
    const { value } = e.target;
    this.setState({
      email: value,
    })    
  }

  handleChangeCPF = (e) => {
    const { value } = e.target;
    this.setState({
      cpf: value,
    })
  }


  submitForm = (e) => {
    e.preventDefault();
  }

  render() {    
    const { nome, email, cpf } = this.state;
    console.log('nome',nome)
    console.log('nome',email)
    console.log('nome',cpf)
    return (
      <fieldset>
        <form onSubmit={this.submitForm} >
          <section>
            <InputForms 
              inputlabel='Nome:'
              inputType='text'
              inputValue={ nome }
              inputMaxLength={40}
              onChangeInput={ this.handleChangeName }
              isRequired={ true }             
              />
              <InputForms 
              inputlabel='Email:'
              inputType='email'
              inputValue={ email }
              inputMaxLength={50}
              onChangeInput={ this.handleChangeEmail }
              isRequired={ true }             
              />
              <InputForms 
              inputlabel='CPF:'
              inputType='text'
              inputValue={ cpf }
              inputMaxLength={11}
              onChangeInput={ this.handleChangeCPF }
              isRequired={ true }             
              />
          </section>
          
          <Button buttonLabel='enviar' buttonName='button' buttonType='submit' ></Button>
        </form>
          { nome }
      </fieldset>      
    )
  }
}

export default FirstFieldSet;