import auth from './auth'

export function getHeaders() {
  return new Headers({
    'content-type': 'application/json',
  })
}

export function getAuthHeaders() {
  return new Headers({
    'content-type': 'application/json',
    Authorization: `Bearer ${auth.getToken()}`,
  })
}
