import {CartContext} from "./CartContex.js";
import {useState} from "react";

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addPizzaToCart = (pizza) => {
    const pizzaExist = cart.find(item => item.id === pizza.id);
    if(pizzaExist){
      setCart(cart.map(item => {
        if (item.id === pizza.id){
          return {
            ...item,
            quantity: pizza.quantity + pizzaExist.quantity
          }
        }
        return item;
      }))
    } else {
      setCart([
        ...cart,
        pizza
      ])
    }
  }

  const removePizzaFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
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