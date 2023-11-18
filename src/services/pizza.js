import {PIZZAS} from "../data/pizzas.js";

const pizzas = () => {
  return PIZZAS.map(pizza => {
    return {
      ...pizza,
      quantity: 0
    }
  })
}

export const getAllPizzas = async () => {
  return pizzas();
}

export const getPizzaByName = async (name) => {
  return pizzas().find(pizza => pizza.name.toLowerCase() === name.toLowerCase())
}