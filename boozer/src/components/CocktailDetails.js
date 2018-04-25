import React from "react";
import CocktailProportions from "./CocktailProportionsShow"

const BASE_URL = "http://localhost:3000/api/v1/cocktails/"

export default class CocktailDetails extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      proportions: []
    }
  }

  componentDidMount = () => {
    fetch(BASE_URL + this.props.drink.id)
    .then(res => res.json())
    .then(json => this.setState({
      proportions: json.proportions
    }))
  }

  componentWillReceiveProps = (nextProps) => {
    fetch(BASE_URL + nextProps.drink.id)
    .then(res => res.json())
    .then(json => this.setState({
      proportions: json.proportions
    }))
  }


  render() {
    console.log(this.state.proportions)
    console.log("heeo")
    return(
      <div id="drinkDetails">
        <h3>Drink Name:</h3>
        <p>{this.props.drink.name}</p>
        <h3>Drink Description:</h3>
        <p>{this.props.drink.description}</p>
        <h3>Instructions:</h3>
        <p>{this.props.drink.instructions}</p>
        <h5>Source:</h5>
        <p>{this.props.drink.source}</p>
        <h3>Proportions:</h3>
        <CocktailProportions proportions={this.state.proportions}/>
      </div>
    )

  }
}
