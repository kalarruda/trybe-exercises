// arquivo Order.js
import React, { Component } from 'react';

class Order extends Component {
  render() {
    const { id, user, product, price } = this.props.items;

    return (
      <div className="order">
        <p> ID:{ id }, {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;