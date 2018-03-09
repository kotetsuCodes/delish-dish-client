export const types = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR: 'GET_MOVIES_ERROR',
}

function getMoviesSuccess(movies) {
  return { type: types.GET_MOVIES_SUCCESS, movies }
}

export function getMovies() {
  return function (dispatch) {
    // api call
    const movieListFromApi = [
      { title: 'Terminator 2: Judgement Day', year: 1991 },
      { title: 'Star Wars', year: 1977 },
      { title: 'Forrest Gump', year: 1994 },
    ]

    dispatch(getMoviesSuccess(movieListFromApi))
  }
}
