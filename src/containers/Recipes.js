import { connect } from 'react-redux'
import { getRecipes, createRecipe } from '../redux/recipes/actions'
import RecipeList from '../components/recipes/recipeList'

function mapStateToProps(state) {
  return {
    recipeData: state.recipes.toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: () => dispatch(getRecipes()),
    createRecipe: recipe => dispatch(createRecipe(recipe)),
  }
}

const VisibleRecipes = connect(mapStateToProps, mapDispatchToProps)(RecipeList)
export default VisibleRecipes
