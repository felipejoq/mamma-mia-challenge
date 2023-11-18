import {useContext} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import useCounter from "./useCounter.js";
import {toast} from "sonner";

export const useButtonsCart = (pizza) => {

  const {addPizzaToCart, removePizzaFromCart, cart} = useContext(CartContext);

  const currentPizza = cart.find(item => item.id === pizza.id);

  const {counter} = useCounter(1);

  const addPizza = () => {
    addPizzaToCart({
      ...pizza,
      quantity: counter
    });
    toast.success(`Pizza ${pizza.name} añadida al carrito!`)
  }

  const subPizza = () => {
    addPizzaToCart({
      ...pizza,
      quantity: -counter
    });
    toast.info(`Pizza ${pizza.name} descontada del carrito!`)
  }

  const removePizza = () => {
    removePizzaFromCart(pizza.id);
    toast.error(`Pizza ${pizza.name} eliminada del carrito!`)
  }

  return {
    currentPizza,
    addPizza,
    subPizza,
    removePizza
  }
};