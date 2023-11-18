export const IngredientsList = ({ingredients}) => {
  return (
    <>
      <h3 className="fs-5">Ingredientes:</h3>
      {
        ingredients.map(ingredient => (
          <p className="ps-4 text-capitalize my-0" key={ingredient}>
            🍕 {ingredient}
          </p>
        ))
      }
    </>
  );
};