import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getPizzaByName, getPizzaBySlug} from "../services/pizza.js";
import {Container} from "react-bootstrap";
import {PizzaDetails} from "../components/PizzaDetails.jsx";

export const Pizza = () => {

  const {slugPizza} = useParams();
  const [pizza, setPizza] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true)
    getPizzaBySlug(slugPizza)
      .then(pizza => {
        if (!pizza) {
          navigate('/page-not-found')
        }
        setPizza(pizza);
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log('Error al obtener la pizza');
      })
  }, [slugPizza]);

  return (
    <Container className="margin-top-navbar">
      {
        isLoading && pizza
          ? "Cargando..."
          : <PizzaDetails pizza={pizza} />
      }
    </Container>
  )
    ;
};