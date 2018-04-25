import React from "react";
import CocktailName from "./CocktailName"
import CocktailDetails from "./CocktailDetails"
import CocktailForm from "./CocktailForm"
import CocktailSearch from "./CocktailSearch";

const BASE_URL = "http://localhost:3000/api/v1/cocktails/"

export default class CocktailsContainer extends React.Component{

  state = {
    data: [],
    searchBy: "",
    filterBy: null,
    clickedCocktail: {},
    searching: false,
    clicked: false,
    ingredientFilter: false,
  }

  componentDidMount = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(json => this.setState({
      data: json
    }))
  }

  addNewCocktail = (newCocktail) => {
    this.setState({
      data: [...this.state.data, newCocktail]
    })
  }

  // renderCocktailNames = () => {
  //   if(!this.state.searching && !this.state.ingredientFilter) {
  //     return this.state.data.map(cocktail => {
  //       return <CocktailName key={cocktail.name} drink={cocktail} setCocktail={this.setCocktail} />
  //     })
  //   } else {
  //     let filteredArr = this.state.data.filter(cocktail => {
  //       return cocktail.name.toLowerCase().indexOf(this.state.searchBy) > -1
  //     })
  //     return filteredArr.map(cocktail => {
  //       return <CocktailName key={cocktail.name} drink={cocktail} setCocktail={this.setCocktail} />
  //     })
  //   }
  //
  // }

  renderCocktailNames = (data) => {
    if(this.state.searching) {
      return this.renderNameSearch(data)
    } else {
      return this.state.data.map(cocktail => {
            return <CocktailName key={cocktail.name} drink={cocktail} setCocktail={this.setCocktail} />
      })
    }
  }
  //if there are no search terms of filters, show all
  //if there is a search term, filter by name
  //if thereis a filter, filter by Ingredients
  //if there a search and/or filter, filter by both
  renderNameSearch = (data) => {
      return data.filter(cocktail => {
        return cocktail.name.toLowerCase().indexOf(this.state.searchBy.toLowerCase()) > -1
        }).map(cocktail => {
        return <CocktailName key={cocktail.name} drink={cocktail} setCocktail={this.setCocktail} />
    })
  }



  renderIngredientFilter = (data) => {
    return data.filter(cocktail => {
      // return cocktail.
    })
    // data.map(cocktail => {
    //   return <CocktailName key={cocktail.name} drink={cocktail} setCocktail={this.setCocktail} />
    // })
  }

  setCocktail = (drink) => {
    let cocktailId = drink.id;
    fetch(BASE_URL + cocktailId)
      .then(res => res.json())
      .then(json => this.setState({
        clickedCocktail: json,
        clicked: true
      }))
  }

  addSearchName = (search) => {
    this.setState({
      searchBy: search,
      searching: true
    })
  }

  render() {
    const label = {
      color:"white"
    }
    return(
      <div>
        <div className="sidenav">
          <p style={label}>List of Cocktails</p>
          {this.renderCocktailNames(this.state.data)}
        </div>
        <div className="wrapper">
          <CocktailSearch searchFunc={this.addSearchName}/>
          <div className="description">
            {this.state.clicked && <CocktailDetails drink={this.state.clickedCocktail}/>}
          </div>
          <div className="form">
            <CocktailForm addToData={this.addNewCocktail}/>
          </div>

        </div>

      </div>//endofsidenav
    )
  }
}
