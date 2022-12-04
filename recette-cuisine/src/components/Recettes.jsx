import CardRecette from "./CardRecette";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/recettes.css";
import HeaderApp from "./HeaderApp";

const Recettes = () => {
  const [recettes, setRecettes] = useState([]);
  const [valeurRecherche, setValeurRecherche] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          valeurRecherche
      )
      .then((res) => {
        if (res.data.meals != null || res.data.meals != undefined) {
          setRecettes(res.data.meals);
        } else {
          setRecettes([]);
        }
        setLoading(false);
      });
  }, [valeurRecherche]);
  return (
    <div className="recettes">
      <HeaderApp></HeaderApp>
      <h1>Recette de cuisine</h1>
      <input
        className="barre-recherche"
        type="text"
        placeholder="Taper le nom d'un aliment (en Anglais)"
        value={valeurRecherche}
        onChange={(e) => setValeurRecherche(e.target.value)}
      ></input>
      {loading ? (
        <img src="https://acegif.com/wp-content/uploads/loading-23.gif" />
      ) : (
        <div className="container-recettes">
          {recettes.map((recette) => {
            return <CardRecette key={recette.idMeal} recette={recette} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Recettes;
