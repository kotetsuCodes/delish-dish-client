import { Map } from 'immutable'
import { types } from './actions'

const initState = new Map({
  ingredients: [],
  ingredientsErrorMessage: '',
})

export default function ingredientReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_INGREDIENTS_SUCCESS:
      return state.set('ingredients', action.ingredients)
    case types.GET_INGREDIENTS_ERROR:
      return state.set('ingredientsErrorMessage', 'Error getting ingredients')
    case types.CREATE_INGREDIENT_SUCCESS:
      return state.set('ingredients', state.get('ingredients').concat(action.ingredient))
    case types.CREATE_INGREDIENT_ERROR:
      return state.set('ingredientsErrorMessage', 'Error creating ingredient')
    default:
      return state
  }
}
