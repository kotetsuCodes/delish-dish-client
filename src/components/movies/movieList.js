import React, { Component } from 'react'

export default class MovieList extends Component {
  componentWillMount() {
    this.props.getMovies()
  }

  render() {
    const { movies } = this.props

    console.log('movies', movies)

    return (
      <div>
        {movies.map(movie => (
          <div>
            <span>
              Title: {movie.title} Year: {movie.year}
            </span>
          </div>
        ))}
      </div>
    )
  }
}
