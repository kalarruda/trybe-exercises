import logo from './logo.svg';
import './App.css';
import Task from './Tasks';
const myList = ['run', 'study', 'sleep'];
console.log('TESTE',myList);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
         { myList.map((item) => <Task nomeItem = { <li>{item}</li> }/>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
