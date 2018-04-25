import React from "react";
//search, filter, sort
import CocktailIngredientsToggle from "./CocktailIngredientsToggle"

export default class CocktailSearch extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      searchIngredient: "",
    }
  }

  searchInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.props.searchFunc(event.target.value)
  }

  toggleShow = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  ingredientInput = (event) => {
    this.setState({
      searchIngredient: event.target.value
    })
  }

  render() {
    return(
      <div className="search">
        <h2>Search for Cocktails</h2>
        <form>
          <label>Search by name: </label>
          <input type="text" name="searchName" onChange={this.searchInput}/>
        </form><br/>

        <div>
          <label>Search by Ingredients: </label>
            <CocktailIngredientsToggle click={this.toggleShow} selectIngredient={this.ingredientInput} searchTerm={this.state.searchIngredient}/>
        </div>

      </div>
    )
  }
}
