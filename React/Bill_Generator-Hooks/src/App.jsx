import React, { useState, useMemo, useEffect } from 'react';
// import './items.css';
import ItemForm from './components/ItemForm';

const TAX_RATE = 0.1; 

const App = () => {
  const [items, setItems] = useState([]);
  // const [billReady, setBillReady] = useState(false);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    // setBillReady(false);
  };

  const total = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    );
    return subtotal + subtotal * TAX_RATE;
  }, [items]);

  useEffect(() => {
    if (items.length > 0) {
      // setBillReady(true);
      alert("bill is ready!!!!")
    }
  }, [items]);

  return (
    <div className="app-container">
      <h1>Bill Generator</h1>
      <ItemForm onAddItem={handleAddItem} />

      {items.length > 0 && (
        <div>
          <h2>Items List :</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                item name: {item.itemName} - {item.quantity} (Quantity) x ₹{item.unitPrice} (unitPrice) = Total Price : ₹
                {item.quantity * item.unitPrice} 
              </li>
            ))}
          </ul>
          <h3>Total (with 10% tax): ₹{total.toFixed(2)}</h3>
        </div>
      )}

    </div>
  );
};

export default App;
