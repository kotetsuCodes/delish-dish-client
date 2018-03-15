import { Map } from 'immutable'
import { types } from './actions'

const initState = new Map({
  recipes: [],
  getRecipeErrorMessage: '',
})

export default function recipeReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_RECIPES_SUCCESS:
      return state.set('recipes', action.recipes)
    case types.GET_RECIPES_ERROR:
      return state.set('getRecipeErrorMessage', 'Error getting recipe list')
    case types.CREATE_RECIPE_SUCCESS:
      return state.set('recipes', state.get('recipes').concat(action.recipe))
    default:
      return state
  }
}
