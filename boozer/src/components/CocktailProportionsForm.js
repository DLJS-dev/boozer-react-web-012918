import React from "react";

export default class CocktailProportionsForm extends React.Component{

  render() {
    return(
      <div>
        <label>Ingredient Name #{this.props.ingredientNum}: </label>
        <input
          type="text"
          name="cocktailIngredient"
          onChange={this.props.proportionInput(this.props.index)}/><br/>
        <label>Quantity: </label>
        <input
          type="text"
          name="cocktailIngredientQuantity"
          onChange={this.props.proportionInput(this.props.index)}/><br/>
      </div>
    )
  }
}
