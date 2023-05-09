import "./itemCount.css";
import { useState } from "react";


const ItemCount = ({ initialStock, onAdd }) => {
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
    onAdd(quantity);
  };

  const showDisponibility = () => {
    if (stock <= 0) {
      return "Sin Stock";
    } else {
      return "Añadir al pedido";
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
        onClick={handleAdd} disabled={stock <= 0}>
        {showDisponibility()}
      </button>

    </div>
  );
};

export default ItemCount;
