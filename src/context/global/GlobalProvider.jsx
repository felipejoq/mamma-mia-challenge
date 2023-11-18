import {GlobalContext} from "./GlobalContext.js";
import {useEffect, useState} from "react";
import {getAllPizzas} from "../../services/pizza.js";
import {useGlobal} from "../../hooks/useGlobal.js";

export const GlobalProvider = ({children}) => {

  const {pizzas, isLoading} = useGlobal();

  return (
    <GlobalContext.Provider value={{
      pizzas,
      isLoading
    }}>
      {children}
    </GlobalContext.Provider>
  );
};