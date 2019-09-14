import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';
import { Container, Logo, Cart } from './styles';

import logo from '../../assets/images/logo.png';

class Header extends Component {
  handleCart = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'TOGGLE_CART',
    });
  };

  render() {
    return (
      <Container>
        <div>
          <Logo>
            <img src={logo} alt="Netshoes" />
          </Logo>
          <Cart>
            <FiShoppingCart onClick={this.handleCart} color="fff" size="25" />
          </Cart>
        </div>
      </Container>
    );
  }
}

export default connect()(Header);
