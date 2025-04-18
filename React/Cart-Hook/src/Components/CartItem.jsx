import React from "react";
import { useCart } from "../Hooks/useCart";

const CartItems = () => {
  const { cart } = useCart();

  return (
    <div className="cart-box" style={{ padding: "10px" }}>
      <h3> Cart: {cart.length} items</h3>
      <ul>
        {cart.map((items, index) => (
          <li key={index}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
