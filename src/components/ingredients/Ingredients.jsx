import {IngredientsList} from "./IngredientsList.jsx";
import {IngredientsBadge} from "./IngredientsBadge.jsx";

export const Ingredients = ({type, ingredients}) => {
  type
    ? type = type.toLowerCase()
    : type = "list";

  const renderIngredientComponent = (type) => {
    switch (type) {
      case "list":
        return <IngredientsList ingredients={ingredients}/>
      case "badges":
        return <IngredientsBadge ingredients={ingredients}/>
      default:
        return <IngredientsList ingredients={ingredients}/>;
    }
  }

  return (
    <>
      {
        renderIngredientComponent(type)
      }
    </>
  );
};