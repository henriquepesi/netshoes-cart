import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px 'Open Sans', sans-serif;
  }

  ul {
    list-style: none;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
    border: none;
    background: #ff691e;
    color: #fff;
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: auto;
  }
`;
