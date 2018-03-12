import apiHelpers from '../../api/ingredients'

export const types = {
  GET_INGREDIENTS: 'GET_INGREDIENTS',
  GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS',
  GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR',
  CREATE_INGREDIENT_SUCCESS: 'CREATE_INGREDIENT_SUCCESS',
  CREATE_INGREDIENT_ERROR: 'CREATE_INGREDIENT_ERROR',
}

function getIngredientsSuccess(ingredients) {
  return { type: types.GET_INGREDIENTS_SUCCESS, ingredients }
}

function createIngredientSuccess(ingredient) {
  return { type: types.CREATE_INGREDIENT_SUCCESS, ingredient }
}

export function getIngredients() {
  return dispatch =>
    // api call
    apiHelpers
      .getIngredients()
      .then(ingredientListFromApi => dispatch(getIngredientsSuccess(ingredientListFromApi)))
}

export function createIngredient(ingredient) {
  return dispatch =>
    apiHelpers
      .createIngredient(ingredient)
      .then(ingredientFromApi => dispatch(createIngredientSuccess(ingredientFromApi)))
}
