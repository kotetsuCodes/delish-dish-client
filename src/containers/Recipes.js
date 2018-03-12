import { connect } from 'react-redux'
import { getRecipes } from '../redux/recipes/actions'
import RecipeList from '../components/recipes/recipeList'

function mapStateToProps(state) {
  return {
    recipes: state.recipes.get('recipes'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: () => dispatch(getRecipes()),
  }
}

const VisibleRecipes = connect(mapStateToProps, mapDispatchToProps)(RecipeList)
export default VisibleRecipes
