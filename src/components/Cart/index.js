import React, { Component } from 'react';
import { FiXCircle, FiTrash2 } from 'react-icons/fi';
import { formatPrice } from '../../util/formatPrice';

import { connect } from 'react-redux';
import {
  CartSide,
  Close,
  CartList,
  CartListInfo,
  CartEmpty,
  Scroll,
  Total,
} from './styles';

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

        <Scroll>
          {!cart.length ? (
            <CartEmpty>carrinho vazio</CartEmpty>
          ) : (
            <CartList>
              {cart.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt="Camiseta Corinthians" />
                  <CartListInfo>
                    <div>
                      <strong>{product.title}</strong>
                      <span> Modelo</span>
                      <span>
                        Quantidade:
                        <input type="number" readOnly value={product.amount} />
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
                      <strong>{product.totalProduct}</strong>
                    </div>
                  </CartListInfo>
                </li>
              ))}
            </CartList>
          )}
        </Scroll>
        <Total>Total:{total}</Total>
        <button type="button">Finalizar compra</button>
      </CartSide>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    totalProduct: formatPrice(product.price * product.amount),
  })),
  toggleCart: state.toggleCart,
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps)(Cart);
