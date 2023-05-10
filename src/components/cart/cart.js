import "./cart.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

import CartItem from "../cartItem/cartItem.js"


const Cart = ({ greeting }) => {
    const { cartList, clearCart } = useContext(CartContext)

    const total = cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cartList.length === 0) {
        return (
            <main className='container-father'>
                <div className="cart-container">
                    <h1>TU CARRITO ESTÁ VACÍO</h1>
                    <button className="btn-itemCart-detail"><Link className="link" to={'/'}>Ir al menú</Link></button>
                </div>
            </main>
        )
    } else {
        return (
            <main className='container-father'>
                <div className="cart-container">
                    <h1>{greeting}</h1>
                    <div className="cart-itemList"> {cartList.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            imgUrl={item.imgUrl}
                        />
                    ))}</div>

                    <h2> TOTAL: ${total}</h2>
                    <div className="cart-btns">
                        <button onClick={clearCart} className="btn-itemCart-detail" >Vaciar carrito</button>
                        <button className="btn-itemCart-detail" >
                            <Link className="link" to={"/checkout"}>Finalizar compra</Link>
                        </button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Cart;