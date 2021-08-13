import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokeApi } from '../redux/actions/actionApi';

class Jokes extends Component {

  componentDidMount() {
    const { getJoke } = this.props;
    getJoke();
  }
  render() {
    const { jokes, isLoading, getJoke } = this.props;
    if (isLoading) {
      return <h1>CARREGANDO...</h1>
    }
    return (
      <div>
        <button
          onClick={ () => getJoke() }
        >
          PIADA
        </button>
        <h1>{jokes}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jokes: state.jokeReducer.jokes,
  isLoading: state.jokeReducer.isLoading,
  // error: state.jokeReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getJoke: () => dispatch(getJokeApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
