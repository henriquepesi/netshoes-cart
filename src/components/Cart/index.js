import React, { Component } from 'react';
import { FiXCircle, FiTrash2 } from 'react-icons/fi';

import { connect } from 'react-redux';
import { CartSide, Close, CartList, CartListInfo, CartEmpty, RemoveButton, Total } from './styles';

class Cart extends Component {
  handleCart = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'TOGGLE_CART',
    });
  };

  render() {
    const { toggleCart, cart, total, dispatch } = this.props;
    return (
      <CartSide isClosed={toggleCart}>
        <Close>
          <FiXCircle onClick={this.handleCart} size="25" color="#5a2d82" />
        </Close>

        {!cart.length ? (
          <CartEmpty>carrinho vazio</CartEmpty>
        ) : (
          <CartList>
            {/* Teste */}
            {cart.map(product => (
              <li key={product.id}>
                <img src={product.image} alt="Camiseta Corinthians" />
                <CartListInfo>
                  <div>
                    <strong>{product.title}</strong>
                    <span>g | modelo</span>
                    <span>
                      Quantidade:
                      <input
                        type="number"
                        readOnly
                        value={product.amount}
                      />{' '}
                    </span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({ type: 'REMOVE_PRODUCT', id: product.id })
                      }
                    >
                    <FiTrash2 />
                    </button>
                    <strong>R$ {product.totalProduct}</strong>
                  </div>
                </CartListInfo>
              </li>
            ))}
          </CartList>
        )}
        <Total>Total: R$ {total}</Total>
        <button type="button">Finalizar compra</button>
      </CartSide>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    totalProduct: (product.price * product.amount).toFixed(2),
  })),
  toggleCart: state.toggleCart,
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

export default connect(mapStateToProps)(Cart);
