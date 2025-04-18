import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
        const data = localStorage.getItem('cartItems');
        return data ? JSON.parse(data) : [];
      });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('cartItems'));
  //   if (items) {
  //     setCart(items); 
  //   }
  // }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return {
    cart,
    addToCart
  };
};


