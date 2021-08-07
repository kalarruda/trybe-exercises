import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Clients from './pages/clients';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/clients" component={ Clients } />
          <Route exact path="/register" component={ Register } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
