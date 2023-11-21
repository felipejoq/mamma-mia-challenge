import {CartContext} from "./CartContex.js";
import {useCart} from "../../hooks/useCart.js";

export const CartProvider = ({children}) => {

  const {cart, totalCart, removePizzaFromCart, addPizzaToCart} = useCart();

  return (
    <CartContext.Provider value={{
      cart,
      totalItems: cart.length,
      totalCart,
      addPizzaToCart,
      removePizzaFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};