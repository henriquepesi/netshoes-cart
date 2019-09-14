import React, { Component } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { connect } from 'react-redux';
import { CartSide, Close } from './styles';

class Cart extends Component {
  handleCart = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'TOGGLE_CART',
    });
  };

  render() {
    const { cart } = this.props;
    return (
      <CartSide isClosed={cart}>
        <Close>
          <FiXCircle onClick={this.handleCart} size="25" color="#5a2d82" />
        </Close>
      </CartSide>
    );
  }
}

export default connect(state => ({
  cart: state.cart,
}))(Cart);
