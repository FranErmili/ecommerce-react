import "./cartItem.css"
import Delete from './delete.svg';

import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { deleteItem} = useContext(CartContext);
    
    const subtotal = price * quantity;

    const handleDelete = () => {
        deleteItem(id);
    }

    return (
        <div className="card-itemCart-container">

            <h3>{name}</h3>
            <p>Precio: $ {price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: $ {subtotal}</p>
            <button onClick={() => handleDelete(id)} className="delete-icon">
                <img src={Delete} />
            </button>
        </div>
    );
}

export default CartItem