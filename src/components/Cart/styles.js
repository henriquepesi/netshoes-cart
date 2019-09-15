import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const CartSide = styled.div`
  background: #e6cefb;
  position: fixed;
  height: calc(100vh - 70px);
  bottom: 0;
  right: -450px;
  width: 450px;
  padding: 10px;
  transition: 0.2s;
  @media (max-width: 768px) {
    width: 100vw;
  }

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

    @media (max-width: 768px) {
      overflow-x: hidden;
    }

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
    span {
      display: flex;
      input {
        padding: 0 10px;
        border: none;
        align-items: red;
        padding-left: 10px;
        width: 60px;
        text-align: center;
        border-radius: 3px;
        margin-left: 5px;
      }
    }
  }
  > div:nth-child(2) {
    align-items: flex-end;
    strong {
      color: #ebbf00;
    }
  }

  button {
    background: none;
    color: #5a2d82;
    margin: 0;
    padding: 0;
    width: auto;
  }
`;

export const Total = styled.strong`
  font-size: 1.5em;
  text-align: center;
  display: block;
  margin: 1em auto;
`;

export const CartEmpty = styled.div`
  width: 100%;
  background: #fff;
  height: 80px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  border-radius: 5px;
  border: 1px dashed #5a2d82;
  font-weight: 500;
  font-size: 1.5em;
  color: #5a2d82;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: calc(100vh - 250px);
  overflow-x: hidden;
`;
