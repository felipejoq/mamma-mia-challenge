export const cartReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[ITEM] add to cart':
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
    case '[ITEM] remove from cart':
      return initialState.filter(item => item.id !== action.payload)
    default:
      return initialState;
  }
};