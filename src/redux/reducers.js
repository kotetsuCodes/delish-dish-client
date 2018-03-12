import { combineReducers } from 'redux'
import recipeReducer from './recipes/reducer'
import shoppingListReducer from './shoppingLists/reducer'
import ingredientReducer from './ingredients/reducer'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  shoppingLists: shoppingListReducer,
  ingredients: ingredientReducer,
})

export default rootReducer
