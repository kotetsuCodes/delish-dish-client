import { Map } from 'immutable'
import { types } from './actions'

const initState = new Map({
  shoppingLists: [],
  getShoppingListsErrorMessage: '',
})

export default function shoppingListReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_SHOPPINGLISTS_SUCCESS:
      return state.set('shoppingLists', action.shoppingLists)
    case types.GET_SHOPPINGLISTS_ERROR:
      return state.set('getShoppingListsErrorMessage', 'Error getting shopping lists')
    default:
      return state
  }
}
