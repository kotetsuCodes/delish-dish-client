import apiHelpers from '../../api/recipes'

export const types = {
  GET_RECIPES: 'GET_RECIPES',
  GET_RECIPES_SUCCESS: 'GET_RECIPES_SUCCESS',
  GET_RECIPES_ERROR: 'GET_RECIPES_ERROR',
  CREATE_RECIPE_SUCCESS: 'CREATE_RECIPE_SUCCESS',
  CREATE_RECIPE_ERROR: 'CREATE_RECIPE_ERROR',
}

function getRecipesSuccess(recipes) {
  return { type: types.GET_RECIPES_SUCCESS, recipes }
}

function createRecipeSuccess(recipe) {
  return { type: types.CREATE_RECIPE_SUCCESS, recipe }
}

export function getRecipes() {
  return dispatch =>
    // api call
    apiHelpers
      .getRecipes()
      .then(recipeListFromApi => dispatch(getRecipesSuccess(recipeListFromApi)))
}

export function createRecipe(recipe) {
  return dispatch =>
    apiHelpers
      .createRecipe(recipe)
      .then(recipeFromApi => dispatch(createRecipeSuccess(recipeFromApi)))
}
