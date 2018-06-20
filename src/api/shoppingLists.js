import { getAuthHeaders } from '../helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getShoppingLists: () =>
    fetch(`${baseApiUrl}/shoppinglists`, {
      headers: getAuthHeaders(),
      method: 'GET',
    }).then(response => response.json()),
  createShoppingList: shoppingList =>
    fetch(`${baseApiUrl}/shoppinglists`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify({ ...shoppingList, dish_ids: shoppingList.dishes }),
    }).then(response => response.json()),
  getDishesForShoppingList: shoppingListId =>
    fetch(`${baseApiUrl}/shoppinglists/${shoppingListId}/dishes`, {
      headers: getAuthHeaders(),
      method: 'GET',
    }).then(response => response.json()),
}
