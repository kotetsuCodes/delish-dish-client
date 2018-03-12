import { getAuthHeaders } from '../Helpers/api'

const baseApiUrl = process.env.REACT_APP_API_BASE_URL

export default {
  getRecipes: () =>
    fetch(`${baseApiUrl}/Recipe/GetRecipes`, {
      headers: getAuthHeaders(),
      method: 'POST',
      body: JSON.stringify({}),
    }).then(response => response.json()),
}
