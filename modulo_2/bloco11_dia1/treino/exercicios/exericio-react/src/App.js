import logo from './logo.svg';
import './App.css';
import Task from './Tasks';

const myList = ['run', 'study', 'sleep'];

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
        { myList.map(myList => Task(myList)) }
         {/* < Task/> { myList.map((item) => Task(item))} */}
        </ul>
      </header>
    </div>
  );
}

export default App;
