import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Home />
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
