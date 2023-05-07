import "./itemCount.css";
import { useState } from "react";

const ItemCount = ({ initialStock, handleOnAdd }) => {
  const [quantity, setquantity] = useState(0);
  const [stock, setStock] = useState(initialStock);

  const increment = () => {
    setquantity(quantity + 1);
    setStock(stock - 1);
  };

  const decrement = () => {
    setquantity(quantity - 1);
    setStock(stock + 1);
  };

  const handleAdd = () => {
    console.log("Productos agregados al carrito= ", quantity);
    handleOnAdd();
  };

  const showDisponibility = () => {
    if (stock <= 0) {
      return "No hay stock";
    } else {
      return "Agregar al carrito";
    }
  };

  return (
    <div className="counter-container">
      <div className="btn-inc-dec-container">
        <button
          className="btn btn-inc-dec"
          onClick={decrement}
          disabled={stock >= initialStock}
        >
          -
        </button>
        <h1>{quantity}</h1>
        <button
          className="btn btn-inc-dec"
          onClick={increment}
          disabled={stock <= 0}
        >
          +
        </button>
      </div>
      <button className="btn btn-add-cart"
  onClick={handleAdd} disabled={stock <= 0}>{showDisponibility()}</button>
    </div>
  );
};

export default ItemCount;
