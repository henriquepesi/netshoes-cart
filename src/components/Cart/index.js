import React, { Component } from 'react';
import { FiXCircle, FiTrash2 } from 'react-icons/fi';

import { connect } from 'react-redux';
import { CartSide, Close, CartList, CartListInfo } from './styles';

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
        <CartList>
          <li>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91189631/camiseta-do-corinthians-basic-tr-masculina-img.jpg"
              alt="Camiseta Corinthians"
            />
            <CartListInfo>
              <div>
                <strong>Camisa Nike Corinthians I</strong>
                <span>g | modelo</span>
                <span>Quantidade</span>
              </div>
              <div>
                <FiTrash2 />
                <strong>R$ 229.9</strong>
              </div>
            </CartListInfo>
          </li>
        </CartList>
      </CartSide>
    );
  }
}

export default connect(state => ({
  cart: state.cart,
}))(Cart);
