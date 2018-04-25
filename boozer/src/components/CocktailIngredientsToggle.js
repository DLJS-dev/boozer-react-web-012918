import React from "react";
import CocktailIngredientsShow from "./CocktailIngredientsShow"

const BASE_URL = "http://localhost:3000/api/v1/ingredients"


class CocktailIngredientsToggle extends React.Component{

  constructor(props) {
    super(props);

    this.state={
      ingredients: []
    }
  }

  componentDidMount = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(json => this.setState({
      ingredients: json
    }))
  }

  filteredIngredient = () => {
    return this.state.ingredients.filter(ingredient => {
      return ingredient.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    })
  }

  render() {

    return (
        <div className="dropdown">
          <button onClick={this.props.click} className="dropbtn">Ingredients</button>
          <div id="myDropdown" className="dropdown-content">
            <input type="text" placeholder="Search.." id="myInput" onChange={this.props.selectIngredient}/>
            <CocktailIngredientsShow drinkIngredients={this.filteredIngredient()} />
          </div>
        </div>
    )

  }
}

export default CocktailIngredientsToggle
