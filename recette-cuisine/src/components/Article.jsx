import React from "react";
import "../styles/article.css";

const Article = (props) => {
  const date = new Date(props.article.date);
  const dateFormatee =
    date.getDate() +
    " " +
    date.toLocaleDateString("fr-FR", { month: "long" }) +
    " " +
    date.getFullYear();
  const hourFormatee =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const handleDelete = () => {
    props.deleteArticle(props.article.id);
  };

  const handleEdit = () => {
    props.editArticle(props.article.id);
  };

  return (
    <div className="article">
      <div className="article__header">
        <h2>{props.article.author}</h2>
        <p>
          Posté le {dateFormatee} à {hourFormatee}
        </p>
      </div>
      <div className="article__content">
        <p>{props.article.content}</p>
      </div>
      <div className="article__footer">
        <button onClick={handleDelete}>Supprimer</button>
        <button onClick={handleEdit}>Modifier</button>
      </div>
    </div>
  );
};

export default Article;
