import styled from 'styled-components';

export const Container = styled.header`
  background: #5a2d82;
  padding: 20px;
  position: fixed;
  left: 0;
  right: 0;

  > div {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const Cart = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  max-width: 100%;
  height: auto;
`;