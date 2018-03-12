import { connect } from 'react-redux'
import { getShoppingLists } from '../redux/shoppingLists/actions'
import ShoppingList from '../components/shoppingLists/shoppingList'

function mapStateToProps(state) {
  console.log(state)
  return {
    shoppingListData: state.shoppingLists.toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getShoppingLists: () => dispatch(getShoppingLists()),
  }
}

const VisibleShoppingLists = connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
export default VisibleShoppingLists
