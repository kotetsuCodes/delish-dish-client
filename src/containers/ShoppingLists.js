import { connect } from 'react-redux'
import {
  getShoppingLists,
  getDishesForShoppingList,
  createShoppingList,
  getRecipes,
} from '../redux/shoppingLists/actions'
import ShoppingList from '../components/shoppingLists/shoppingList'

function mapStateToProps(state) {
  return {
    shoppingListData: state.shoppingLists.toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: () => dispatch(getRecipes()),
    getShoppingLists: () => dispatch(getShoppingLists()),
    getDishesForShoppingList: shoppingListId => dispatch(getDishesForShoppingList(shoppingListId)),
    createShoppingList: shoppingList => dispatch(createShoppingList(shoppingList)),
  }
}

const VisibleShoppingLists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingList)
export default VisibleShoppingLists
