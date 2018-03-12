import { getAuthHeaders } from '../Helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getShoppingLists: () =>
    fetch(`${baseApiUrl}/ShoppingList/GetShoppingLists`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify({}),
    }).then(response => response.json()),
}
