import {CartContext} from "./CartContex.js";
import {useEffect, useReducer} from "react";
import {cartReducer} from "../../reducers/cartReducer.js";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export const CartProvider = ({children}) => {

  const [cart, dispatch] = useReducer(cartReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const addPizzaToCart = (pizza) => {
    const action = {
      type: "[ITEM] add to cart",
      payload: pizza
    }
    dispatch(action);
  }

  const removePizzaFromCart = (id) => {
    const action = {
      type: "[ITEM] remove from cart",
      payload: id
    }
    dispatch(action)
  }

  const totalCart = () => {
    if(cart.length > 0){
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      totalItems: cart.length,
      totalCart: totalCart(),
      addPizzaToCart,
      removePizzaFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};