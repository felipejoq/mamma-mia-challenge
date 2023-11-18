import {Container} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "../context/cart/CartContex.js";

export const Cart = () => {

  const {cart} = useContext(CartContext);

  return (
    <Container className="margin-top-navbar">
      {cart.length}
    </Container>
  );
};