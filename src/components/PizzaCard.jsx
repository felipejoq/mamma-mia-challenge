import {Accordion, Button, ButtonGroup, Card, ListGroup} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {IngredientsList} from "./IngredientsList.jsx";
import {clpFormat} from "../helpers/currencyFormatters.js";
import {Price} from "./Price.jsx";
import {ButtonAddPizzaToCart} from "./ButtonAddPizzaToCart.jsx";

export const PizzaCard = ({pizza}) => {

  const navigate = useNavigate();

  const handleNavigateToPizzaPage = (name) => {
    navigate(`/pizzas/${name}`)
  }

  return (
    <Card className="shadow-simple card-pizza">
      <Card.Img
        className="cursor-pointer"
        onClick={() => handleNavigateToPizzaPage(pizza.name)}
        variant="top" src={pizza.img}/>
      <Card.Body>
        <Card.Title>
          <h2
            onClick={() => handleNavigateToPizzaPage(pizza.name)}
            className="text-capitalize cursor-pointer">{pizza.name}
          </h2>
          <Price price={pizza.price}/>
        </Card.Title>
        <hr/>
        <IngredientsList ingredients={pizza.ingredients}/>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="w-100">
          <Button
            onClick={() => handleNavigateToPizzaPage(pizza.name)}
            variant="outline-secondary"
            className="fs-5"
          >
            <i className="bi bi-eye-fill"></i> Detalles
          </Button>
          <ButtonAddPizzaToCart pizza={pizza}/>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};