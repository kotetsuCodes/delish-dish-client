import apiHelpers from '../../api/recipes'

export const types = {
  GET_RECIPES: 'GET_RECIPES',
  GET_RECIPES_SUCCESS: 'GET_RECIPES_SUCCESS',
  GET_RECIPES_ERROR: 'GET_RECIPES_ERROR',
}

function getRecipesSuccess(recipes) {
  return { type: types.GET_RECIPES_SUCCESS, recipes }
}

export function getRecipes() {
  return dispatch =>
    // api call
    apiHelpers
      .getRecipes()
      .then(recipeListFromApi => dispatch(getRecipesSuccess(recipeListFromApi)))
}
