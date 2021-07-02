import React from 'react';
import './App.css';
import InputForms from './components/InputForms';
import Button from './components/Button';

class App extends React.Component {

  constructor() {
    super();

    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
    // this.handleChange = this.handleChange(this);

    this.state = {
      email: '',
      password: '',
      showEmail: false,
      isRequiredInput: true,
    }    
  }

  //  handleChange(e) { 
  //   const { name, value } = e.target  
  //   this.setState({    
  //     [name]: value
  //   }, () => console.log(name)) // NÃO CONSEGUI FUNCIONAR ESSE CONSOLE.LOG
  // }

  handleChange = (e) => { // escutador de quando digita
    const { name, value } = e.target
    this.setState({
      [name]: value,
      showEmail:false, // para mostrar o email depois de clicar 
    })
  }

  onSubmitForm = (e) => {
    console.log('CLICOU!!@#')
    e.preventDefault();
    this.setState({
      showEmail: true,
    })
  }

  render() {
    const { email, password, showEmail, isRequiredInput} = this.state;
    console.log('email',email)
    console.log('password', password)
    return (
      <div className="App">
        <h1>Formulário</h1>   
        <form onSubmit={ this.onSubmitForm }>
        <InputForms
          inputlabel="Email"
          inputName="email" // o nome tem que ser igual ao do state
          inputType="email"
          inputValue ={ email }
          onChangeInput={this.handleChange}
        />
        <InputForms
        inputlabel="senha"
        inputName ="password"
        inputValue= {password}
        isRequired={ !isRequiredInput } //não precisa de senha assim
        inputType="password" 
        onChangeInput={this.handleChange}
        />
        <Button typeButton="submit" labelButton='Clique'  ></Button>
        </form>
        { showEmail ? email : '' } 
      </div>
    );
  }
}
export default App;
