import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/formatPrice';
import api from '../../services/api';

import { ProductList, Value } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_PRODUCT',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>

            <Value price>{product.priceFormatted}</Value>
            <Value>3 x de {formatPrice(product.price / 3)}</Value>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              Comprar
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
