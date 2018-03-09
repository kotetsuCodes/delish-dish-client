import { Map } from 'immutable'
import { types } from './actions'

const initState = new Map({
  movies: [],
  getMovieErrorMessage: '',
})

export default function movieReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_MOVIES_SUCCESS:
      return state.set('movies', action.movies)
    case types.GET_MOVIES_ERROR:
      return state.set('getMovieErrorMessage', 'Error getting movie list')
    default:
      return state
  }
}
