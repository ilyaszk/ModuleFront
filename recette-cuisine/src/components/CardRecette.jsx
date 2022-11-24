import React from "react";
import "../styles/cardRecette.css";

const CardRecette = (props) => {
  return (
    <div className="card-recette">
      <h1>{props.recette.strMeal}</h1>
      <p>Origine : {props.recette.strArea}</p>
      <img src={props.recette.strMealThumb} alt="recette" />
      <p className="description">
        {props.recette.strInstructions.slice(0, 300)}...
      </p>
    </div>
  );
};

export default CardRecette;
