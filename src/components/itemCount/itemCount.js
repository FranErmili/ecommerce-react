import "./itemCount.css"
import { useState } from "react";

const ItemCount = ({ initialStock }) => {
    const [counter, setCount] = useState(0)
    const [stock, setStock] = useState (initialStock)

    const increment = () => {
        setCount(counter + 1)
        setStock(stock - 1)
    };

    const decrement = () => {
        setCount(counter - 1)
        setStock(stock + 1)
    };

    const onAdd = () => {
        console.log('Productos agregados al carrito= ', counter )
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
                <button className="btn btn-inc-dec" onClick={decrement} disabled={stock >= initialStock}>-</button>
                <h1>{counter}</h1>
                <button className="btn btn-inc-dec" onClick={increment} disabled={stock <= 0}>+</button>
            </div>
            <button className="btn btn-add-cart"
             onClick={onAdd} disabled={stock <= 0}>{showDisponibility()}</button>
            
        </div>
    )
}

export default ItemCount;
