import React from "react";
import ProductCard from "./Components/ProductCard";
import CartItem from "./Components/CartItem";
import Product from "./Components/Product";
import "./Cart.css"; 

function App() {
  return (
    <div className="app-container">
      <h1 className="store-title"> My Store</h1>
      <div className="main-content">
        <div className="products">
          <ProductCard />
          <Product />
        </div>
        <CartItem />
      </div>
    </div>
  );
}

export default App;
