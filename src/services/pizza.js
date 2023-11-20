import {PIZZAS} from "../data/pizzas.js";

const pizzas = () => {
  return PIZZAS.map(pizza => {
    return {
      ...pizza,
      quantity: 0,
      slug: `${pizza.name.split(" ").join("-")}-${pizza.id.toLowerCase()}`
    }
  })
}

export const getAllPizzas = async () => {
  return pizzas();
}

export const getPizzaByName = async (name) => {
  return pizzas().find(pizza => pizza.name.toLowerCase() === name.toLowerCase())
}

export const getPizzaBySlug = async (slug) => {
  return pizzas().find(pizza => pizza.slug === slug.toLowerCase())
}