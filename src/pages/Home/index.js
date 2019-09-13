import React from 'react';

import { ProductList, Value } from './styles';

export default function Home() {
  // const [products, setProducts] = useState([]);

  // function handleAddTech() {
  //   setProducts([...products, 'product-1']);
  // }

  return (
    <ProductList>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/93500751/camisa-do-corinthians-i-2019-nike-feminina-img.jpg"
          alt="Camiseta Corinthians"
        />
        <strong>Camisa Nike Corinthians I</strong>
        <Value price>R$ 229.9</Value>
        <Value>3 x de {(229.9 / 3).toFixed(2)}</Value>
        <button type="submit">Comprar</button>
      </li>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/311840/camiseta_corinthians_raglan_preto_53714_1_20181123123430.jpg"
          alt="Camiseta Corinthians"
        />
        <strong>Camisa Nike Corinthians I</strong>
        <Value price>R$ 229.9</Value>
        <Value>3 x de {(229.9 / 3).toFixed(2)}</Value>
        <button type="submit">Comprar</button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/91189631/camiseta-do-corinthians-basic-tr-masculina-img.jpg"
          alt="Camiseta Corinthians"
        />
        <strong>Camisa Nike Corinthians I</strong>
        <Value price>R$ 229.9</Value>
        <Value>3 x de {(229.9 / 3).toFixed(2)}</Value>
        <button type="submit">Comprar</button>
      </li>
    </ProductList>
  );
}
