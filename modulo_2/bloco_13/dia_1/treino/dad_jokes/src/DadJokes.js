import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    // this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState({
      loading: true, // toda vez que chamar o this.fetchJoke o loading vai ser true
    }, async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    console.log(requestObject)
    this.setState({
      jokeObj: requestObject, // jokeObjt recebe uma piada
      loading: false, // o loading vai ser falso quando tiver um elemento já dentro do jokeObj
    })})
    
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({storedJokes, jokeObj}) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {/* <span>RENDERIZAÇÃO CONDICIONAL</span> */}
      {/* <p>{ jokeObj ? jokeObj.joke : loadingElement }</p> */}
      <p>{ loading ? loadingElement : this.renderJokeElement() }</p> 
      </div>
    );
  }
}

export default DadJoke;