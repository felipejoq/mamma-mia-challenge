import {useContext, useEffect} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import useCounter from "../hooks/useCounter.js";
import {MoreThanOneButton} from "./MoreThanOneButton.jsx";
import {SimpleAddButton} from "./SimpleAddButton.jsx";
import {toast} from "sonner";
import {useButtonsCart} from "../hooks/useButtonsCart.js";

export const ButtonAddPizzaToCart = ({pizza}) => {

  const {currentPizza, addPizza, subPizza, removePizza} = useButtonsCart(pizza)

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