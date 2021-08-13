import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Joke from './pages/Jokes';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/jokes" component={ Joke } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
