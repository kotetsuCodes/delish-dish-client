import { connect } from 'react-redux'
import { getMovies } from '../redux/movies/actions'
import MovieList from '../components/movies/movieList'

function mapStateToProps(state) {
  console.log('state', state)

  return {
    movies: state.movies.get('movies'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies()),
  }
}

const VisibleMain = connect(mapStateToProps, mapDispatchToProps)(MovieList)
export default VisibleMain
