import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
