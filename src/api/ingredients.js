import { getAuthHeaders } from '../Helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getIngredients: () =>
    fetch(`${baseApiUrl}/Ingredient/GetIngredients`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify({}),
    }).then(response => response.json()),
  createIngredient: ingredient =>
    fetch(`${baseApiUrl}/Ingredient/CreateIngredient`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify(ingredient),
    }).then(response => response.json()),
}
