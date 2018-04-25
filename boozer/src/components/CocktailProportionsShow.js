import React from "react";

export default class CocktailProportions extends React.Component{
  
  showProportions = () => {
    return this.props.proportions.map(proportion => {
      return (
        <div>
          <h4>Ingredient Name: </h4>
          <p>{proportion.ingredient_name}</p><br/>
          <h4>Amount: </h4>
          <p>{proportion.amount}</p><br/><br/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.showProportions()}
      </div>
    )
  }
}
