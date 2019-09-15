import styled, { css } from 'styled-components';

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
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${props => props.hasProduct && css`
  &::after {
      position: absolute;
      content: '';
      background: #ff691e;
      height: 10px;
      width: 9px;
      top: 0px;
      right: -5px;
      border-radius: 2px;
      border: 1px solid #fff;
    }
  `}
`;

export const Logo = styled.div`
  max-width: 100%;
  height: auto;
`;
