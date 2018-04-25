import React from "react";

const CocktailName = (props) => {
  return (
    <div onClick={() => props.setCocktail(props.drink)}>
      <h2>{props.drink.name}</h2>
    </div>
  )
}

export default CocktailName
