import React, { Component } from 'react'
import TextInput from '../../components/Form/TextInput'
import Button from '../../components/Button'
import { Card, CardTitle, CardContent } from '../../components/Card'
import Theme from '../../helpers/theme'

const initState = {
  showCreateForm: false,
  recipe: {
    title: '',
    image_url: '',
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

  handleTitleChange = (e) => {
    this.setState({ recipe: { ...this.state.recipe, title: e.target.value } })
  }

  handleImageUrlChange = (e) => {
    this.setState({ recipe: { ...this.state.recipe, image_url: e.target.value } })
  }

  handleIngredientAmountTypeChange = (e, ingredientIndex) => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: this.state.recipe.ingredients.map((ingredient, index) => {
          if (ingredientIndex === index) ingredient.quantity_name = e.target.value

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
          if (ingredientIndex === index) ingredient.quantity_value = e.target.value

          return ingredient
        }),
      },
    })
  }

  handleIngredientTitleChange = (e, ingredientIndex) => {
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: this.state.recipe.ingredients.map((ingredient, index) => {
          if (ingredientIndex === index) ingredient.title = e.target.value

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
          if (instructionIndex === index) instruction.instruction_content = e.target.value

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
          title: '',
          quantity_name: '',
          quantity_value: '',
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
          order: this.state.recipe.instructions.length + 1,
          instruction_content: e.target.value,
        }),
      },
    })
  }

  render() {
    const { recipeData } = this.props
    const { showCreateForm } = this.state

    return (
      <div>
        {recipeData.recipes
          ? recipeData.recipes.map(recipe => (
            <div key={recipe.id}>
              <span>Name: {recipe.title}</span>
            </div>
            ))
          : null}

        <Button primary onClick={e => this.toggleCreateForm(e, true)}>
          Add Dish
        </Button>

        {showCreateForm ? (
          <form onSubmit={e => this.createRecipe(e)}>
            <TextInput placeholder="Dish Name" onChange={e => this.handleTitleChange(e)} />
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
                      onChange={e => this.handleIngredientTitleChange(e, index)}
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
                  <div key={instruction.order}>
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
