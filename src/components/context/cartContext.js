import { createContext, useState } from "react";

export const CartContext = createContext({
  cartList: []
})

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToCart = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCartList((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prev) => prev + quantity);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const deleteItem = (itemId) => {
    const cartUpdate = cartList.filter((prod) => prod.id !== itemId);
    const itemToDelete = cartList.find((prod) => prod.id === itemId);
    setCartList(cartUpdate);
    setTotalQuantity((prev) => prev - itemToDelete.quantity);
  };

  const clearCart = () => {
    setCartList([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cartList.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};