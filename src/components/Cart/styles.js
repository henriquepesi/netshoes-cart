import styled, { css } from 'styled-components';

export const CartSide = styled.div`
  background: #e6cefb;
  position: fixed;
  height: calc(100vh - 69px);
  bottom: 0;
  right: -350px;
  width: 350px;
  padding: 20px;
  transition: 0.2s;
  ${props =>
    props.isClosed &&
    css`
      right: 0;
    `};
`;

export const Close = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
