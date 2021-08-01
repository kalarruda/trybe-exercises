import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { cards } from './data/cards';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <ButtonClicks />
          <NumberClicks cards={ cards } />
        </Provider>
      </div>
    );
  }
}

export default App;