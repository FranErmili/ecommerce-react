import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import CartItem from "../cartItem/cartItem.js"


const Cart = ({ greeting }) => {
    const { cartList, clearCart } = useContext(CartContext)

    if (cartList.length === 0) {
        return (
            <div>
                <h2>TU CARRITO ESTÁ VACÍO</h2>
                <button><Link to={'/'}>Ir al menú</Link></button>

            </div>
        )
    } else {
        return (
            <div>
                <h2>{greeting}</h2>
                <div> {cartList.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        quantity={item.quantity}
                    />
                ))}</div>
                <div>
                    <h2> TOTAL: $5000</h2>
                </div>
                <button onClick={clearCart} >Vaciar carrito</button>
                <button>
                    <Link to={"/checkout"} />
                    Finalizar compra</button>
            </div>
        )
    }
}

export default Cart;
// import { useContext } from "react"
// import { CartContext } from "../context/cartContext"
// import { Link } from "react-router-dom"
// import CartItem from "../cartItem/cartItem"


//     return (
//         <div> {cart.map(p => <CartItem key={p.id} {...p} />)}
//             <h1> TOTAL: ${total}</h1>
//             <button onClick={() => clearCart()} >
//                 Eliminar carritos
//             </button>
//             <Link to='/checkout'>checkout</Link>

//         </div>
//     )

// }

// export default Cart