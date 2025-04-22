import React, { useState, useRef, useId} from "react";
import "./items.css";

const ItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState("");

  const itemNameId = useId();
  const quantityId = useId();
  const unitPriceId = useId();

  // console.log("Item name id:", itemNameId);
  // console.log("Quantity id:", quantityId);
  // console.log("Unit price id:", unitPriceId);

  const priceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!unitPrice) {
      priceRef.current.focus();
      return;
    }

    const newItem = {
      itemName,
      quantity: Number(quantity),
      unitPrice: Number(unitPrice),
    };

    onAddItem(newItem);

    setItemName("");
    setQuantity(1);
    setUnitPrice("");
    priceRef.current.blur();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={itemNameId}>Item:</label>
        <input
          id={itemNameId}
          type="text"
          style={{ height : '40px', borderRadius : '12px', fontSize : '16px'}}
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
      </div>

      <div className="form-group">
        <label htmlFor={quantityId}>Quantity:</label>
        <input
          id={quantityId}
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor={unitPriceId}>Unit Price:</label>
        <input
          id={unitPriceId}
          type="number"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
          ref={priceRef}
        />
      </div>

      <button type="submit" className="button">
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
