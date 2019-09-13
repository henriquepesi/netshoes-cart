import React, { useState } from 'react';

// import { Container } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  function handleAddTech() {
    setProducts([...products, 'product-1']);
  }

  return (
    <div>
      <ul data-testid="product-list">
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <button type="submit" onClick={handleAddTech}>
        Comprar
      </button>
    </div>
  );
}
