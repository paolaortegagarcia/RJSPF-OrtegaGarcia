import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  console.log(cart);

  function addItem(item, cantidad) {

    const idItem = cart.findIndex((cartItem) => cartItem.key === item.key)

    if (idItem !== -1) {
      const actualizarCarrito = [...cart];
      actualizarCarrito[idItem].cantidad += cantidad;
      setCart(actualizarCarrito);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  }

  function removeItem(key) {
    const actualizarCarrito = cart.filter((item) => item.key !== key);
    setCart(actualizarCarrito);
  }

  function clear() {
    setCart([]);
  }

  function isInCart(key) {
    return cart.some((item) => item.key === key);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>

  )
}

export default CartContextProvider;