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
    const { toggleCart, cart } = this.props;
    return (
      <CartSide isClosed={toggleCart}>
        <Close>
          <FiXCircle onClick={this.handleCart} size="25" color="#5a2d82" />
        </Close>
        <CartList>

          {cart.map(product => (
             <li key={product.id}>
             <img
               src={product.image}
               alt="Camiseta Corinthians"
             />
             <CartListInfo>
               <div>
                 <strong>{product.title}</strong>
                 <span>g | modelo</span>
                 <span>Quantidade</span>
               </div>
               <div>
                 <FiTrash2 />
                 <strong>R$ 229.9</strong>
               </div>
             </CartListInfo>
           </li>
          ))}
        </CartList>
      </CartSide>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  toggleCart: state.toggleCart

});

export default connect(mapStateToProps)(Cart);
