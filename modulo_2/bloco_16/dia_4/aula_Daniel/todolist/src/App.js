import logo from './logo.svg';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
