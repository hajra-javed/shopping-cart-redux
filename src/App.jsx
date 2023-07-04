import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';
import style from './App.module.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

function App() {
  const [tab, setTab] = useState('home');
  const [cartVisibility, setCartVisibility] = useState('invisible');
  const [cart, setCart] = useState({items:[], totalCount: 0 });

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

  const handleUpdateCart = useCallback((change, item) => {
    // if (cart.item)
    setCart((cart) => (
      {
        items: [...cart.items, { name: item.name, price: item.price, id: item.id}],
        totalCount: cart.totalCount + change
      })
    );
  }, []);

  return (
    <BrowserRouter>
      <Nav className={tab} cartVisibility={cartVisibility} totalCount={cart.totalCount} />
      <Routes>
        <Route path='/' element={<Home className={style.main} initiated={handleInitialization} />} />
        <Route path='/shop' element={<Shop initiated={handleInitialization} updateCart={handleUpdateCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
