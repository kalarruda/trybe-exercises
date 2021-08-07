import React, { Component } from  'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
         <h2>HOME</h2>
        <Link to="/login" >LOGIN</Link>
      </div>
    );
  }
}

export default Home;
