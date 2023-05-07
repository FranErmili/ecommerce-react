import { createContext, useState } from "react";

export const CartContext = createContext({
    cartList: []
})

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCartList(prev => [...prev, {...item, quantity: quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }
    
    const deleteItem = (itemId) => {
        const cartUpdate = cartList.filter(prod => prod.id !== itemId)
        setCartList(cartUpdate)
    }

    const clearCart = () => {
        setCartList([])
    }

    const isInCart = (itemId) => {
        return cartList.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, deleteItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}