import React from "react";
import "../styles/cardRecette.css";
import { Link } from "react-router-dom";

const CardRecette = (props) => {
  //funcction qui rediriege vers la page de la recette
  return (
    <div className="card-recette">
      <h1>{props.recette.strMeal}</h1>
      <p>Origine : {props.recette.strArea}</p>
      <img src={props.recette.strMealThumb} alt="recette" />
      <p className="description">
        {props.recette.strInstructions.slice(0, 300)}...
      </p>
      <Link
        className="btn-Recette"
        to="/recetteDetails"
        state={{ recette: props.recette.strMeal }}
      >
        Cuisiner
      </Link>
    </div>
  );
};

export default CardRecette;
