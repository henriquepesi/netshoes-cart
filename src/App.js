import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';

import { store, persistor } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Header />
          <Home />
          <Cart />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
