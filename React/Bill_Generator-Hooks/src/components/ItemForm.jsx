import React, { useState, useRef } from 'react';
import "./items.css"; 

const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState('');

  const priceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!unitPrice) {
      priceRef.current.focus();
      return;
    }

    console.log("Item added");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Item:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
      </div>

      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Unit Price:</label>
        <input
          type="number"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
          ref={priceRef}
        />
      </div>

      <button type="submit" className="button">Add Item</button>
    </form>
  );
};

export default ItemForm;