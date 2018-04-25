import React from "react";

export default class CocktailIngredientsShow extends React.Component{
  constructor(props) {
    super(props);

  }

  showIngredients = () => {
    return(
      this.props.drinkIngredients.map(ingredients => {
        return (
          <p onClick={this.props.clickOnIngredient}>{ingredients.name}</p>
        )
      })
    )
  }

  render() {
    return(
      <div>
      {this.showIngredients()}
      </div>
    )
  }
}
