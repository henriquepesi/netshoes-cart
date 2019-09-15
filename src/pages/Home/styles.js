import styled from 'styled-components';

export const ProductList = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 80px;
  li {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 20px;
    padding: 20px;

    img {
      max-width: 100%;
      height: auto;
    }

    strong {
      font-size: 1.1rem;
      margin: 10px 0;
    }
  }
`;

export const Value = styled.span`
  color: #13abe1;
  font-size: ${props => (props.price ? '1.3rem' : '1rem')};
  font-weight: ${props => (props.price ? 'bold' : 'default')};
  margin-bottom: ${props => (props.price ? '0' : '10px')};
`;
