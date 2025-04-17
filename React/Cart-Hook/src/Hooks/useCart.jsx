import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('cartItems'));
//     if (items) {
//         setCart(JSON.parse(items));    
//     }
//   }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return {
    cart,
    addToCart
  };
};
