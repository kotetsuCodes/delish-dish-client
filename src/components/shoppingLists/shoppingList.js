import React, { Component } from 'react'

export default class ShoppingList extends Component {
  componentWillMount() {
    this.props.getShoppingLists()
  }

  render() {
    const { shoppingListData } = this.props
    console.log('this.props', this.props)

    return (
      <div>
        {shoppingListData.shoppingLists.map(list => (
          <div key={list.Id}>
            <span>Title: {list.title}</span>
          </div>
        ))}
      </div>
    )
  }
}
