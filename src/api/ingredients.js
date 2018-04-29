import { getAuthHeaders } from '../helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getIngredients: () =>
    fetch(`${baseApiUrl}/ingredients`, {
      headers: getAuthHeaders(),
      method: 'GET',
    }).then(response => response.json()),
  createIngredient: ingredient =>
    fetch(`${baseApiUrl}/ingredients`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify(ingredient),
    }).then(response => response.json()),
}
