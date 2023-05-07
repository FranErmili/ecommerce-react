import ItemCount from "../itemCount/itemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const CartItem = ({ id, name, price ,quantity }) => {
    const { addToCart, deleteItem } = useContext(CartContext);

    return (
        <div className="card-item-detail-container">
            <h2 className="item-detal-tittle">{name}</h2>
            <h3 className="item-detail-price">Precio: $ {price}</h3>
            <h3 className="item-detail-price">Cantidad: {quantity}</h3>
            <h3 className="item-detail-price">Subtotal $</h3>
            <button onClick={deleteItem} />
        </div>
    );

    // return (
    //     <div className="card-container">
    //         <div>
    //             <h2 className="card-tittle">{nombre}</h2>
    //         </div>
    //         <div>
    //             <p className="card-price">
    //                 Precio: $ {precio}
    //             </p>
    //         </div>
    //         <div>
    //             <p className="card-price">
    //                 Cantidad: {counter}
    //             </p>
    //         </div>
    //         <div>
    //             <p className="card-price">
    //                 Subtotal: $ {counter * precio}

    //             </p>
    //         </div>

    //     </div>


}

export default CartItem