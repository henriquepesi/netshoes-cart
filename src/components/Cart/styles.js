import styled, { css } from 'styled-components';

export const CartSide = styled.div`
  background: #e6cefb;
  position: fixed;
  height: calc(100vh - 69px);
  bottom: 0;
  right: -450px;
  width: 450px;
  padding: 10px;
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

export const CartList = styled.ul`
  li {
    display: flex;
    padding: 10px;
    background: #fff;
    border-radius: 5px;

    & + li {
      margin-top: 15px;
    }
    img {
      width: 70px;
      height: auto;
    }
  }
`;

export const CartListInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    justify-content: space-between;
  }
  > div:nth-child(2) {
    align-items: flex-end;
    strong {
      color: #ebbf00;
    }
  }
`;
