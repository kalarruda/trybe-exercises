import React, { Component } from 'react';
import './App.css';
import fetchAPI from './services/api';
import ListCharacters from './components/ListCharacters';
import HomeFooter from './components/HomeFooter';
import HomeHeader from './components/HomeHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isFetching: true,
    };
  }

  async componentDidMount() {
    const characters = await fetchAPI();
    this.setCharacters(characters);
  }

  setCharacters(characters) {
    this.setState((state) => ({
      ...state,
      characters: [...characters],
      isFetching: false,
    }));
  }

  render() {
    const { characters, isFetching } = this.state;
    return (
      <>
        <HomeHeader />
        <main>
          <ListCharacters characters={ characters } isFetching={ isFetching } />
        </main>
        <HomeFooter />
      </>
    );
  }
}

export default App;
