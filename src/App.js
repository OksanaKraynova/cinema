import React, { useEffect, useState } from 'react';
import './scss/style.scss'
import Footer from './components/Footer';
import Header from './components/Header';
import RouteApp from './Routes';
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './funcs/scrollToTop';
function App() {
	
	const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header searchValue={searchValue} setSearchValue={setSearchValue}  />
        <main>
          <RouteApp searchValue={searchValue} setSearchValue={setSearchValue} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
