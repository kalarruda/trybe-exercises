import React from 'react';

class CardsList extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <div>
        <h2>{`Título: ${card.name}`}</h2>
        <h4>{`Subtítulo: ${card.subtitle}`}</h4>
        <p>{`História: ${card.storyle}`}</p>
      </div>
    )
  }
}

export default CardsList;