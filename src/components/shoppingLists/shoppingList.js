import React, { Component } from 'react'
import TextInput from '../../components/Form/TextInput'
import Button from '../../components/Button'
import CheckBox from '../../components/Form/Checkbox'
import { Card, CardTitle, CardContent } from '../../components/Card'
import Theme from '../../helpers/theme'

const initState = {
  showCreateForm: false,
  showEditForm: false,
  shoppinglist: {
    title: '',
    dishes: [],
  },
}

export default class ShoppingList extends Component {
  state = initState

  componentWillMount() {
    this.props.getShoppingLists()
    this.props.getRecipes()
  }

  handleTitleChange = (e) => {
    this.setState({ shoppinglist: { ...this.state.shoppinglist, title: e.target.value } })
  }

  toggleCreateForm = (e, showForm) => {
    this.setState(initState)
    this.setState({ showCreateForm: showForm })
  }

  toggleEditForm = (e, showForm, shoppingListId) => {
    this.props.getDishesForShoppingList(shoppingListId)
    this.setState({ showEditForm: showForm })
  }

  addOrRemoveDishFromShoppingList = (e, recipeId) => {
    if (this.dishIsInShoppingList(recipeId)) {
      this.setState({
        shoppinglist: {
          ...this.state.shoppinglist,
          dishes: this.state.shoppinglist.dishes.filter(id => id !== recipeId),
        },
      })
    } else {
      this.setState({
        shoppinglist: {
          ...this.state.shoppinglist,
          dishes: this.state.shoppinglist.dishes.concat(recipeId),
        },
      })
    }
  }

  dishIsInShoppingList = recipeId => this.state.shoppinglist.dishes.indexOf(recipeId) > -1

  createShoppingList = (e) => {
    e.preventDefault()
    this.props.createShoppingList(this.state.shoppinglist)
    this.setState(initState)
  }

  render() {
    const { shoppingListData } = this.props
    const { showCreateForm, showEditForm } = this.state

    return (
      <div>
        {shoppingListData.shoppingLists
          ? shoppingListData.shoppingLists.map(list => (
            <Card
              backgroundColor={Theme.Cards.Pink.Fill}
              textColor={Theme.Cards.White.Color}
              borderRadius={Theme.Cards.BorderRadius}
              key={list.id}
              onClick={e => this.toggleEditForm(e, true, list.id)}
            >
              <CardTitle>{list.title}</CardTitle>

              {showEditForm && list.dishes && list.dishes.length > 0 ? (
                <CardContent>{list.dishes.map(dish => <div>{dish.title}</div>)}</CardContent>
                ) : (
                  <CardContent />
                )}
            </Card>
            ))
          : null}

        <Button primary onClick={e => this.toggleCreateForm(e, true)}>
          Add Shopping List
        </Button>

        {showCreateForm ? (
          <form onSubmit={e => this.createShoppingList(e)}>
            <TextInput placeholder="Shopping List Name" onChange={e => this.handleTitleChange(e)} />

            <Card
              backgroundColor={Theme.Cards.Pink.Fill}
              textColor={Theme.Cards.White.Color}
              borderRadius={Theme.Cards.BorderRadius}
            >
              <CardTitle>Dishes</CardTitle>
              <CardContent>
                {shoppingListData.recipes
                  ? shoppingListData.recipes.map(recipe => (
                    <CheckBox
                      key={recipe.id}
                      labelDisplay={recipe.title}
                      onClickAction={e => this.addOrRemoveDishFromShoppingList(e, recipe.id)}
                      isChecked={this.dishIsInShoppingList(recipe.id)}
                    />
                    ))
                  : null}
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
