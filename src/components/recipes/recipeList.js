import React, { Component } from 'react'

export default class RecipeList extends Component {
  componentWillMount() {
    this.props.getRecipes()
  }

  render() {
    const { recipes } = this.props

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.Id}>
            <span>Title: {recipe.title}</span>
          </div>
        ))}
      </div>
    )
  }
}
