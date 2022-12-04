import React from "react";
import HeaderApp from "./HeaderApp";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../styles/recetteDetails.css";
const RecetteDetails = (props) => {
  const [recette, setRecette] = useState([]);
  const [recetteInit, setRecetteInit] = useState(useLocation());
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          recetteInit.state.recette
      )
      .then((res) => {
        if (res.data.meals[0] != null || res.data.meals[0] != undefined) {
          setRecette(res.data.meals[0]);
        } else {
          setRecette([]);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="recette-details">
      <HeaderApp></HeaderApp>
      <NavLink className="btn-Retour" to="/">
        🠔 Retour
      </NavLink>
      <h1>{recette.strMeal}</h1>

      {loading ? (
        <img src="https://acegif.com/wp-content/uploads/loading-23.gif" />
      ) : (
        <div>
          <img src={recette.strMealThumb} alt="recette" />
          <div className="detail">
            <div className="ingredient">
              <h2>Origine :</h2>
              <p>{recette.strArea}</p>
              <h2>Ingredients :</h2>
              {
                //affichage des ingredients de la recette et de leur quantité respectives %strIngredient% et %strMeasure%
                Object.keys(recette).map((key) => {
                  if (key.includes("strIngredient") && recette[key] != "") {
                    return (
                      <p key={key.slice(13)}>
                        {recette[key]} : {recette["strMeasure" + key.slice(13)]}
                      </p>
                    );
                  }
                })
              }
            </div>

            <div className="instruction">
              <h2>Instructions :</h2>
              <p>{recette.strInstructions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecetteDetails;
