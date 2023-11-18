import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../context/cart/CartContex.js";
import {clpFormat} from "../helpers/currencyFormatters.js";

const ACT_CLASS = "nav-item nav-link active";
const NO_ACT_CLASS = "nav-item nav-link item-link";

export const Header = () => {

  const {totalItems, totalCart} = useContext(CartContext)
  const setClassActive = ({isActive}) => {
    return isActive ? ACT_CLASS : NO_ACT_CLASS
  }

  return (
    <>
      <Navbar fixed expand="lg" className="bg-pizza-color shadow-simple fixed-top" data-bs-theme="dark">
        <Container>
          <NavLink to="/" className="navbar-brand fs-3">
            🍕 Mamma Mia!
          </NavLink>
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to={totalItems > 0 ? "/cart" : ""} className={`${ACT_CLASS} fs-4`}>
              <i className="bi bi-basket"></i> {clpFormat(totalCart)}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};