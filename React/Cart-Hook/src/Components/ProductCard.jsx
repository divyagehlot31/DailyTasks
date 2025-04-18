import React from "react";
import { useCart } from "../Hooks/useCart";

function ProductCard() {
  const { addToCart } = useCart();

  const product1 = { id: 1, name: "StoryBook" };
  const product2 = { id: 2, name: 'NoteBook' };
  // const product3 = { id: 3, name: 'Book' };

  return (
    <div  className="product-card" style={{ padding: "20px" }}>
      <h3> Product 1st Store</h3>

      {/* Card 1 */}
      <div className="cards">
        <h4>{product1.name}</h4>
        <button onClick={() => addToCart(product1)}>Add to Cart</button>
      </div>
      <div className="cards">
        <h4>{product2.name}</h4>
        <button onClick={() => addToCart(product2)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
