import React, { Component } from 'react';
import { connect } from 'react-redux'
import api from '../../services/api';

import { ProductList, Value } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_PRODUCT',
      product
    });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image}  alt={product.title}/>
            <strong>{product.title}</strong>
            <Value price>{
              product.currencyFormat}
              {product.price}
              </Value>
            <Value>3 x de {(product.price / 3).toFixed(2)}</Value>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}>
                Comprar
                </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home)
