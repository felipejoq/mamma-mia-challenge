import {useEffect, useReducer} from "react";
import {cartReducer} from "../reducers/cartReducer.js";
import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from "../reducers/cartActions.js";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export const useCart = () => {

  const [cart, dispatch] = useReducer(cartReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const addPizzaToCart = (pizza) => {
    const action = {
      type: ADD_ITEM_TO_CART,
      payload: pizza
    }
    dispatch(action);
  }

  const removePizzaFromCart = (id) => {
    const action = {
      type: REMOVE_ITEM_FROM_CART,
      payload: id
    }
    dispatch(action)
  }

  const totalCart = () => {
    if(cart.length > 0){
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  }

  return {
    cart,
    totalCart: totalCart(),
    addPizzaToCart,
    removePizzaFromCart,
  }
};