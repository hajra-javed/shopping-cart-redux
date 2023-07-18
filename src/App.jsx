import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';
import style from './App.module.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { useCallback } from 'react';

function App() {
  const [tab, setTab] = useState('home');
  const [cartVisibility, setCartVisibility] = useState('invisible');

  const handleInitialization = useCallback((tab) => {
    {
      if (tab === 'home') {
        setTab('home');
        setCartVisibility('invisible');
      } else {
        setTab('shop');
        setCartVisibility('');
      };
    }
  }, []);

  return (
    <BrowserRouter>
        <Nav className={tab} cartVisibility={cartVisibility} />
        <footer>
          Copyright © github.com/hajra-javed
        </footer>
        <Routes>
          <Route path='/shopping-cart' element={<Home className={style.main} initiated={handleInitialization} />} />
          <Route path='/shopping-cart/shop' element={<Shop initiated={handleInitialization} />} >
            <Route path='/shopping-cart/shop/cart' element={<Cart />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
