import { createGlobalStyle } from 'styled-components';

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
  }
`;
