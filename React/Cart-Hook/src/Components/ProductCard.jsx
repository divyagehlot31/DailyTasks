import React from 'react';
import { useCart } from '../Hooks/useCart';


function ProductCard() {
  const { addToCart } = useCart();

  const product1 = { id: 1, name: 'Book' };
  // const product2 = { id: 2, name: 'Pen' };
  // const product3 = { id: 3, name: 'Notebook' };

  return (
    <div style={{ padding: '20px' }}>
      <h2> Product Store</h2>

      {/* Card 1 */}
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', width: '200px' }}>
        <h4>{product1.name}</h4>
        <button onClick={() => addToCart(product1)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard
