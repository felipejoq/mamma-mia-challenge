import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from "./cartActions.js";

export const cartReducer = (initialState = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const pizzaExist = initialState.find(item => item.id === action.payload.id);
      if (pizzaExist) {
        return initialState.map(item => {
          if (item.id === pizzaExist.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity
            }
          }
          return item;
        })
      } else {
        return [
          ...initialState,
          action.payload
        ]
      }
    case REMOVE_ITEM_FROM_CART:
      return initialState.filter(item => item.id !== action.payload)
    default:
      return initialState;
  }
};