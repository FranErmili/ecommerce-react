import "./itemDetail.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/cartContext";
import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({ stock, id, name, description, price, imgUrl }) => {
  const [quantityAded, setQuantityAdded] = useState(null);
  const { addToCart } = useContext(CartContext);
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,name, price, description,stock
    };

    addToCart(item, quantity);
  };


  return (
    <div className="card-item-detail-container">
        <h2 className="item-detal-tittle">{name}</h2>
        <img className="item-detail-img" src={imgUrl} alt={name} />
        <p className="item-detail-description">{description}</p>
        <h3 className="item-detail-price">Precio: $ {price}</h3>

      <div>
        {quantityAded !== null ? (
          <Link to="/cart">Ir al Carrito</Link>
        ) : (
          <ItemCount initialStock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;