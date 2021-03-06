// src/App.js
import React from "react";
import { connect } from "react-redux";
import { fetchDog } from "./store/index";

class App extends React.Component {
  componentDidMount() {
    const { fetchDog } = this.props;
    fetchDog();
  }

  render() {
    const { isFetching, src, fetchDog } = this.props;
    return isFetching ? (
      <div>
        <button style={{ display: "block" }} onClick={fetchDog} type="button">
          Novo Doguinho
        </button>
        <h2>CARREGANDO...</h2>
      </div>
    ) : (
      <div style={{ width: 500 }}>
        <button style={{ display: "block" }} onClick={fetchDog} type="button">
          Novo Doguinho
        </button>
        <img style={{ width: "100%" }} src={src} alt="dog" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.imagePath.message,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
