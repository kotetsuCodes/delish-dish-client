import shoppingListApiHelpers from '../../api/shoppingLists'
import recipeApiHelpers from '../../api/recipes'

export const types = {
  GET_RECIPES_SUCCESS: 'GET_RECIPES_SUCCESS',
  GET_SHOPPINGLISTS_SUCCESS: 'GET_SHOPPINGLISTS_SUCCESS',
  GET_DISHES_FOR_SHOPPINGLIST_SUCCESS: 'GET_DISHES_FOR_SHOPPINGLIST_SUCCESS',
  GET_RECIPES_ERROR: 'GET_RECIPES_ERROR',
  CREATE_SHOPPINGLIST_SUCCESS: 'CREATE_SHOPPINGLIST_SUCCESS',
}

function getRecipesSuccess(recipes) {
  return { type: types.GET_RECIPES_SUCCESS, recipes }
}

function getShoppingListsSuccess(shoppingLists) {
  return { type: types.GET_SHOPPINGLISTS_SUCCESS, shoppingLists }
}

function getDishesForShoppingListSuccess(shoppingListId, dishes) {
  return { type: types.GET_DISHES_FOR_SHOPPINGLIST_SUCCESS, shoppingListId, dishes }
}

function createShoppingListSuccess(shoppingList) {
  return { type: types.CREATE_SHOPPINGLIST_SUCCESS, shoppingList }
}

export function getRecipes() {
  return dispatch =>
    // api call
    recipeApiHelpers.getRecipes().then(recipes => dispatch(getRecipesSuccess(recipes)))
}

export function getShoppingLists() {
  return dispatch =>
    // api call
    shoppingListApiHelpers
      .getShoppingLists()
      .then(shoppingLists => dispatch(getShoppingListsSuccess(shoppingLists)))
}

export function getDishesForShoppingList(shoppingListId) {
  return dispatch =>
    shoppingListApiHelpers
      .getDishesForShoppingList(shoppingListId)
      .then(dishes => dispatch(getDishesForShoppingListSuccess(shoppingListId, dishes)))
}

export function createShoppingList(list) {
  return dispatch =>
    shoppingListApiHelpers
      .createShoppingList(list)
      .then(shoppingList => dispatch(createShoppingListSuccess(shoppingList)))
}
