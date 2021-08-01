import React, { Component } from 'react';
import './App.css';
import fetchAPI from './services/api';
import ListCharacters from './components/ListCharacters';
import HomeFooter from './components/HomeFooter';
import HomeHeader from './components/HomeHeader';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isFetching: true,
      name: '',
      origin: '',
      status: '',
      gender: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const characters = await fetchAPI();
    this.setCharacters(characters);
    console.log(characters);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  setCharacters(characters) {
    this.setState((state) => ({
      ...state,
      characters: [...characters],
      isFetching: false,
    }));
  }

  filterCharacters() {
    const {
      characters,
      name = false,
      origin = false,
      gender = false,
      status = false,
    } = this.state;
    if (name || origin || gender || status) {
      let found = [...characters];
      if (name) {
        found = found.filter((character) => character.name.toLowerCase()
          .includes(name.toLowerCase()));
      }
      if (origin) {
        found = found.filter(({ origin: o }) => o.name.toLowerCase()
          .includes(origin.toLowerCase()));
      }
      if (gender) {
        found = found.filter(({ gender: g }) => g.toLowerCase() === gender.toLowerCase());
      }
      if (status) {
        found = found.filter(({ status: s }) => s.toLowerCase() === status.toLowerCase());
      }
      return found;
    }
    return characters;
  }

  render() {
    const { isFetching, name, origin, gender, status } = this.state;
    return (
      <>
        <HomeHeader />
        <SearchBar
          name={ name }
          handleChange={ this.handleChange }
          status={ status }
          origin={ origin }
          gender={ gender }
        />
        <main>
          <ListCharacters
            characters={ this.filterCharacters() }
            isFetching={ isFetching }
          />
        </main>
        <HomeFooter />
      </>
    );
  }
}

export default App;
