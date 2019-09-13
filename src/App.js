import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
