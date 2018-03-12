import { connect } from 'react-redux'
import { getIngredients, createIngredient } from '../redux/ingredients/actions'
import IngredientList from '../components/ingredients/ingredientList'

function mapStateToProps(state) {
  return {
    ingredientData: state.ingredients.toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getIngredients: () => dispatch(getIngredients()),
    createIngredient: ingredient => dispatch(createIngredient(ingredient)),
  }
}

const VisibleIngredients = connect(mapStateToProps, mapDispatchToProps)(IngredientList)
export default VisibleIngredients
