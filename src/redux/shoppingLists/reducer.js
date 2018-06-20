import { Map } from 'immutable'
import { types } from './actions'

const initState = new Map({
  shoppingLists: [],
  recipes: [],
  getShoppingListsErrorMessage: '',
})

export default function shoppingListReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_RECIPES_SUCCESS:
      return state.set('recipes', action.recipes)
    case types.GET_SHOPPINGLISTS_SUCCESS:
      return state.set('shoppingLists', action.shoppingLists)
    case types.GET_DISHES_FOR_SHOPPINGLIST_SUCCESS:
      return state.set(
        'shoppingLists',
        state.get('shoppingLists').map((shoppingList) => {
          if (shoppingList.id === action.shoppingListId) shoppingList.dishes = action.dishes
          return shoppingList
        }),
      )
    case types.GET_SHOPPINGLISTS_ERROR:
      return state.set('getShoppingListsErrorMessage', 'Error getting shopping lists')
    case types.CREATE_SHOPPINGLIST_SUCCESS:
      return state.set('shoppingLists', state.get('shoppingLists').concat(action.shoppingList))
    default:
      return state
  }
}
