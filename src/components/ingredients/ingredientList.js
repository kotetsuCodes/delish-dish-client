import React, { Component } from 'react'
import TextInput from '../../components/Form/TextInput'
import Button from '../../components/Button'

export default class IngredientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateForm: false,
      ingredientName: '',
    }
  }
  componentWillMount() {
    this.props.getIngredients()
  }

  handleNameChange = (e) => {
    this.setState({
      ingredientName: e.target.value,
    })
  }

  createIngredient = (e) => {
    e.preventDefault()
    this.props.createIngredient({ Name: this.state.ingredientName })
    this.setState({
      ingredientName: '',
    })
  }

  toggleCreateForm = (e, showForm) => {
    this.setState({
      showCreateForm: showForm,
    })
  }

  render() {
    const { ingredientData } = this.props
    const { showCreateForm } = this.state

    return (
      <div>
        {ingredientData.ingredients.map(ingredient => (
          <div key={ingredient.Id}>
            <span>{ingredient.name}</span>
          </div>
        ))}

        <Button primary onClick={e => this.toggleCreateForm(e, true)}>
          Add Ingredient
        </Button>

        {showCreateForm ? (
          <form onSubmit={e => this.createIngredient(e)}>
            <TextInput placeholder="ingredient name" onChange={e => this.handleNameChange(e)} />
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
