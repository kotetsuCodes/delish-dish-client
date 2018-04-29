import { getAuthHeaders } from '../helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getRecipes: () =>
    fetch(`${baseApiUrl}/dishes`, {
      headers: getAuthHeaders(),
      method: 'GET',
    }).then(response => response.json()),
  createRecipe: recipe =>
    fetch(`${baseApiUrl}/dishes`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify(recipe),
    }).then(response => response.json()),
}
