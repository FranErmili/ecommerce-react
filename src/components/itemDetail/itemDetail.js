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
      id, name, price, imgUrl, stock, imgUrl
    };

    addToCart(item, quantity);
  };


  return (
    <div className="card-item-detail-container">
      <img className="item-detail-img" src={imgUrl} alt={name} />
      <div className="item-container">
        <h2 className="item-detail-tittle">{name}</h2>
        <p className="item-detail-description">{description}</p>
        <h3 className="item-detail-price">Precio: $ {price}</h3>
        <div>
          {quantityAded !== null ? (
            <div className="btn-containers">
              <Link to="/cart">
                <button className="btn btn-add-cart">Ver pedido</button>
              </Link>
              <Link to="/">
                <button className="btn btn-add-cart">Agregar más productos</button>
              </Link>
            </div>
          ) : (
            <ItemCount initialStock={stock} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;