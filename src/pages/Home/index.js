import React, { Component } from 'react';
import api from '../../services/api';

import { ProductList, Value } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image}  alt={product.title}/>
            <strong>{product.title}</strong>
            <Value price>{product.currencyFormat} {product.price}</Value>
            <Value>3 x de {(product.price / 3).toFixed(2)}</Value>
            <button type="submit">Comprar</button>
          </li>
        ))}
      </ProductList>
    );
  }
}
