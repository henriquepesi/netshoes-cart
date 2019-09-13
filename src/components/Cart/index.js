import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { CartSide, Close } from './styles';

export default function Cart() {
  const [cartIsClosed, setCartIsClosed] = useState(true);

  function handleCart() {
    setCartIsClosed(!cartIsClosed);
  }

  return (
    <CartSide isClosed={cartIsClosed}>
      <Close>
        <FiXCircle onClick={handleCart} size="25" color="#5a2d82" />
      </Close>
    </CartSide>
  );
}
