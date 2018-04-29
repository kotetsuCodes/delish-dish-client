import { getAuthHeaders } from '../helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getShoppingLists: () =>
    fetch(`${baseApiUrl}/shoppinglists`, {
      headers: getAuthHeaders(),
      method: 'GET',
    }).then(response => response.json()),
}
