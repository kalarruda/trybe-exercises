import React from "react";
import App from './App';

const Component = (props) => {
  const {sobreNome} = props;
  return (
  <div>
    <h1>José carlos {sobreNome}</h1>
    <h2>Como você está?</h2>
  </div>
     )
}

export default Component;
