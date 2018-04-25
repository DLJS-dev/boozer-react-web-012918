import React from "react";
import CocktailProportionsForm from "./CocktailProportionsForm"

const BASE_URL = "http://localhost:3000/api/v1/cocktails/"

export default class CocktailForm extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      cocktailName: "",
      cocktailDescription: "",
      cocktailInstruction: "",
      cocktailProportions: [{
        cocktailIngredient: "",
        cocktailIngredientQuantity: ""
      }],
      // numberOfProportions: 1
    }
  }

  newCocktailInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  cocktailSubmit = (event) => {
    event.preventDefault();
    fetch(BASE_URL, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.cocktailName,
        description: this.state.cocktailDescription,
        instructions: this.state.cocktailInstruction,
        proportions: this.state.cocktailProportions
      })
    }).then(res => res.json())
    .then(json => this.props.addToData(json))
    event.target.reset()
  }

  addProportionsToState = (event) => {
    event.preventDefault()
    this.setState({
      cocktailProportions: [...this.state.cocktailProportions, {
        cocktailIngredient: "",
        cocktailIngredientQuantity: ""
      }]
    })
  }

  showProportionsForm = () => {
    // let num = this.state.numberOfProportions;
    // let form = []
    // for(let i = 0; i < num; i++){
    //   form.push(<CocktailProportionsForm ingredientNum={i+1} index={i} sendUpProportions={this.addToCocktailProportions}/>)
    // }
    // return form;
    return this.state.cocktailProportions.map((proportion, index) => {
      return (
        <CocktailProportionsForm
          ingredientNum={index+1}
          index={index}
          proportionInput={this.addProportion}/>
      )
    })
  }

  addToCocktailProportions = (proportions) => {
    this.setState({
      cocktailProportions: [...this.state.cocktailProportions, proportions]
    })
  }

  addProportion = (index) => (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    console.log(index)
    let cocktails = this.state.cocktailProportions.map((proportion, arrIndex) => {
      if(index !== arrIndex) {
        return proportion
      } else {
        return {...proportion, [event.target.name]: event.target.value }
      }
    })
    this.setState({
      cocktailProportions: cocktails
    })
  }

  render() {
    return(
      <form onSubmit={this.cocktailSubmit}>
        <h1>Create a Cocktail~</h1><br/>
        <label>Cocktail Name: </label>
        <input type="text" name="cocktailName" onChange={this.newCocktailInput}/><br/>
        <label>Description: </label>
        <textarea type="text" name="cocktailDescription" onChange={this.newCocktailInput}/><br/>
        <label>Instructions: </label>
        <textarea type="text" name="cocktailInstruction" onChange={this.newCocktailInput}/><br/>
        <h1>Proportions</h1>
        {this.showProportionsForm()}
        <button onClick={this.addProportionsToState}>Add more ingredients</button>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
