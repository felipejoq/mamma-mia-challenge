import {Button, ButtonGroup, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {IngredientsList} from "./IngredientsList.jsx";
import {Price} from "./Price.jsx";
import {ButtonAddPizzaToCart} from "./ButtonAddPizzaToCart.jsx";

export const PizzaCard = ({pizza}) => {

  const navigate = useNavigate();

  const handleNavigateToPizzaPage = (slug) => {
    navigate(`/pizzas/${slug}`)
  }

  return (
    <Card className="shadow-simple card-pizza">
      <Card.Img
        className="cursor-pointer"
        onClick={() => handleNavigateToPizzaPage(pizza.slug)}
        variant="top" src={pizza.img}/>
      <Card.Body>
        <Card.Title>
          <h2
            onClick={() => handleNavigateToPizzaPage(pizza.slug)}
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
            onClick={() => handleNavigateToPizzaPage(pizza.slug)}
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