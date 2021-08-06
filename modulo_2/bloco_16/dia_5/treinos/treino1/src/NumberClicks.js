import React from  'react';
import { connect } from 'react-redux';
import CardsList from './components/CardsList';

class NumberClicks extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     cards: [],
  //   }
  // }

  render() {
    const { cards } = this.props;
    return(
      <div>
        { this.props.counter }
        { cards.map((card) => <CardsList key={ card.id } card={ card } /> )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.clickReducer.counter
})

export default connect(mapStateToProps)(NumberClicks);
