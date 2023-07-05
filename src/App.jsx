import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav/Nav';
import style from './App.module.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

function App() {
  const [tab, setTab] = useState('home');
  const [cartVisibility, setCartVisibility] = useState('invisible');
  const [cart, setCart] = useState({ items: [], totalCount: 0 });

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
    const itemIndex = cart.items.findIndex((i) =>  i.key === item.id );
    let newItems = cart.items;

    if (itemIndex !== -1) {
      if (change === 1 || (change === -1 && newItems[itemIndex].quantity > 1)) {
        newItems[itemIndex] = {
          name: item.name,
          price: item.price,
          key: item.id,
          path: item.path,
          quantity: newItems[itemIndex].quantity + change
        };
      } else {
        newItems.splice(itemIndex, 1);
      }
    } else {
      newItems.push({
        name: item.name,
        price: item.price,
        key: item.id,
        path: item.path,
        quantity: change
      });
    };

    setCart((cart) => (
      {
        items: newItems,
        totalCount: cart.totalCount + change
      })
    );
  }, [cart]);

  return (
    <BrowserRouter>
      <Nav className={tab} cartVisibility={cartVisibility} totalCount={cart.totalCount} />
      <Routes>
        <Route path='/' element={<Home className={style.main} initiated={handleInitialization} />} />
        <Route path='/shop' element={<Shop initiated={handleInitialization} updateCart={handleUpdateCart} items={cart.items} />} >
          <Route path='/shop/cart' element={<Cart items={cart.items} />} />
        </Route>
        {/* <Route path='/shop/cart' element={<Cart items={cart.items} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
