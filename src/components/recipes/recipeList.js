import React, { Component } from 'react'
import TextInput from '../../components/Form/TextInput'
import Button from '../../components/Button'
import { Card, CardTitle, CardContent } from '../../components/Card'
import Theme from '../../Helpers/Theme'

const initState = {
  showCreateForm: false,
  recipe: {
    name: '',
    imageUrl: '',
    ingredients: [],
    instructions: [],
  },
}

export default class RecipeList extends Component {
  state = initState

  componentWillMount() {
    this.props.getRecipes()
  }

  createRecipe = (e) => {
    e.preventDefault()
    this.props.createRecipe(this.state.recipe)
    this.setState(initState)
  }

  handleNameChange = (e) => {
    this.setState({ recipe: { ...this.state.recipe, name: e.target.value } })
  }

  handleImageUrlChange = (e) => {
    this.setState({ recipe: { ...this.state.recipe, imageUrl: e.target.value } })
  }

  handleIngredientAmountTypeChange = (e, ingredientIndex) => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: this.state.recipe.ingredients.map((ingredient, index) => {
          if (ingredientIndex === index) ingredient.amountLabel = e.target.value

          return ingredient
        }),
      },
    })
  }

  handleIngredientAmountChange = (e, ingredientIndex) => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: this.state.recipe.ingredients.map((ingredient, index) => {
          if (ingredientIndex === index) ingredient.amountValue = e.target.value

          return ingredient
        }),
      },
    })
  }

  handleIngredientNameChange = (e, ingredientIndex) => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: this.state.recipe.ingredients.map((ingredient, index) => {
          if (ingredientIndex === index) ingredient.name = e.target.value

          return ingredient
        }),
      },
    })
  }

  handleInstructionChange = (e, instructionIndex) => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        instructions: this.state.recipe.instructions.map((instruction, index) => {
          if (instructionIndex === index) instruction.content = e.target.value

          return instruction
        }),
      },
    })
  }

  toggleCreateForm = (e, showForm) => {
    this.setState(initState)
    this.setState({ showCreateForm: showForm })
  }

  appendIngredient = (e) => {
    e.preventDefault()
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: this.state.recipe.ingredients.concat({
          name: '',
          amountLabel: '',
          amountValue: '',
        }),
      },
    })
  }

  appendInstruction = (e) => {
    e.preventDefault()
    this.setState({
      recipe: {
        ...this.state.recipe,
        instructions: this.state.recipe.instructions.concat({
          instructionOrder: this.state.recipe.instructions.length + 1,
          content: e.target.value,
        }),
      },
    })
  }

  render() {
    const { recipeData } = this.props
    const { showCreateForm } = this.state

    return (
      <div>
        {recipeData.recipes.map(recipe => (
          <div key={recipe.recipeId}>
            <span>Name: {recipe.name}</span>
          </div>
        ))}

        <Button primary onClick={e => this.toggleCreateForm(e, true)}>
          Add Recipe
        </Button>

        {showCreateForm ? (
          <form onSubmit={e => this.createRecipe(e)}>
            <TextInput placeholder="Recipe name" onChange={e => this.handleNameChange(e)} />
            <TextInput placeholder="Image Url" onChange={e => this.handleImageUrlChange(e)} />

            <Card
              backgroundColor={Theme.Cards.Pink.Fill}
              textColor={Theme.Cards.White.Color}
              borderRadius={Theme.Cards.BorderRadius}
            >
              <CardTitle>Ingredients</CardTitle>

              <CardContent>
                {this.state.recipe.ingredients.map((ingredient, index) => (
                  <div>
                    <TextInput
                      placeholder="Name"
                      onChange={e => this.handleIngredientNameChange(e, index)}
                    />
                    <TextInput
                      placeholder="Amount"
                      onChange={e => this.handleIngredientAmountChange(e, index)}
                    />
                    <TextInput
                      placeholder="Amount Type (ex: cups)"
                      onChange={e => this.handleIngredientAmountTypeChange(e, index)}
                    />
                  </div>
                ))}

                <Button onClick={e => this.appendIngredient(e)}>Add Ingredient</Button>
              </CardContent>
            </Card>

            <Card
              backgroundColor={Theme.Cards.Pink.Fill}
              textColor={Theme.Cards.White.Color}
              borderRadius={Theme.Cards.BorderRadius}
            >
              <CardTitle>Instructions</CardTitle>

              <CardContent>
                {this.state.recipe.instructions.map((instruction, index) => (
                  <div>
                    <TextInput
                      placeholder="Instruction"
                      onChange={e => this.handleInstructionChange(e, index)}
                    />
                  </div>
                ))}

                <Button onClick={e => this.appendInstruction(e)}>Add Instruction</Button>
              </CardContent>
            </Card>

            <Button type="submit" primary>
              Save
            </Button>
            <Button onClick={e => this.toggleCreateForm(e, false)}>Cancel</Button>
          </form>
        ) : null}
      </div>
    )
  }
}
