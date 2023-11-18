import {GlobalContext} from "./GlobalContext.js";
import {useEffect, useState} from "react";
import {getAllPizzas} from "../../services/pizza.js";

export const GlobalProvider = ({children}) => {

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getAllPizzas()
      .then(pizzas => {
        setPizzas(pizzas);
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log("Error al obtener listado de pizzas");
      })
  }, []);

  return (
    <GlobalContext.Provider value={{
      pizzas,
      isLoading
    }}>
      {children}
    </GlobalContext.Provider>
  );
};