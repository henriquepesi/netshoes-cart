import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Home from '../../pages/Home';

describe('Home', () => {
  it('should be able to add new product', () => {
    const { getByText, getByTestId, debug } = render(<Home />);
    debug();
    fireEvent.click(getByText('Comprar'));
    debug();

    expect(getByTestId('product-list')).toContainElement(
      getByText('product-1')
    );
  });
});
