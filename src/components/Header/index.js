import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Container, Logo, Cart } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <div>
        <Logo>
          <img src={logo} alt="Netshoes" />
        </Logo>
        <Cart>
          <FiShoppingCart color="fff" size="25" />
        </Cart>
      </div>
    </Container>
  );
}
