import React from "react";
import { useCart } from "../Hooks/useCart";

function Product() {
  const { addToCart } = useCart();

  // const product1 = { id: 1, name: 'Book' };
  const product2 = { id: 2, name: "Pen" };
  // const product3 = { id: 3, name: 'Notebook' };

  return (
    <div  className="product-card" style={{ padding: "20px" }}>
      <h3> Product 2nd Store</h3>

      {/* Card 1 */}
      <div className="cards">
        <h4>{product2.name}</h4>
        <button onClick={() => addToCart(product2)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
