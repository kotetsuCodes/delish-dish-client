import { connect } from 'react-redux'
import RecipeList from '../components/recipes/recipeList'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

const VisibleMain = connect(mapStateToProps, mapDispatchToProps)(RecipeList)
export default VisibleMain
