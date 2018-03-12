import apiHelpers from '../../api/shoppingLists'

export const types = {
  GET_RECIPES: 'GET_RECIPES',
  GET_SHOPPINGLISTS_SUCCESS: 'GET_RECIPES_SUCCESS',
  GET_RECIPES_ERROR: 'GET_RECIPES_ERROR',
}

function getShoppingListsSuccess(shoppingLists) {
  return { type: types.GET_SHOPPINGLISTS_SUCCESS, shoppingLists }
}

export function getShoppingLists() {
  return dispatch =>
    // api call
    apiHelpers
      .getShoppingLists()
      .then(shoppingListsFromApi => dispatch(getShoppingListsSuccess(shoppingListsFromApi)))
}
