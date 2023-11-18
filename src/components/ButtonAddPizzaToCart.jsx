import {Button, ButtonGroup} from "react-bootstrap";
import {useContext, useEffect} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import useCounter from "../hooks/useCounter.js";
import {MoreThanOneButton} from "./MoreThanOneButton.jsx";
import {SimpleAddButton} from "./SimpleAddButton.jsx";

export const ButtonAddPizzaToCart = ({pizza}) => {

  const {addPizzaToCart, removePizzaFromCart, cart} = useContext(CartContext);

  const currentPizza = cart.find(item => item.id === pizza.id);

  const {counter} = useCounter(1);

  const addPizza = () => {
    addPizzaToCart({
      ...pizza,
      quantity: counter
    });
  }

  const subPizza = () => {
    addPizzaToCart({
      ...pizza,
      quantity: -counter
    });
  }

  const removePizza = () => {
    removePizzaFromCart(pizza.id)
  }

  return (
    currentPizza?.quantity > 0
      ? <MoreThanOneButton
        currentPizza={currentPizza}
        addPizza={addPizza}
        removePizza={removePizza}
        subPizza={subPizza}
      />
      : <SimpleAddButton
      currentPizza={currentPizza}
      addPizza={addPizza}
      />
  )
};