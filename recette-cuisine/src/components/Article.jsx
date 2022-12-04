import React, { useState } from "react";
import "../styles/article.css";

const Article = (props) => {
  const [onEdition, setOnEdition] = useState(false);
  const date = new Date(props.article.date);
  const [contentValueValide, setContentValueValide] = React.useState(true);

  const dateFormatee =
    date.getDate() +
    " " +
    date.toLocaleDateString("fr-FR", { month: "long" }) +
    " " +
    date.getFullYear();
  const hourFormatee =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const handleDelete = () => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      props.deleteArticle(props.article.id);
    }
  };

  const handleEdit = () => {
    if (props.contentEdition.length >= 140) {
      setContentValueValide(true);
      props.editArticle(props.article.id);
      setOnEdition(false);
      props.setCardOnEdit(false);
    } else {
      setContentValueValide(false);
    }
  };

  const edit = () => {
    setOnEdition(true);
    props.setAuthorEdition(props.article.author);
    props.setContentEdition(props.article.content);
    props.setCardOnEdit(true);
  };

  return (
    <div className="article">
      <div className="article__header">
        {onEdition !== true ? (
          <h2>{props.article.author}</h2>
        ) : (
          <div>
            <h2>Pseudo : </h2>
            <input
              type="text"
              value={props.authorEdition}
              onChange={(e) => props.setAuthorEdition(e.target.value)}
              required
            />
          </div>
        )}
        <p>
          Posté le {dateFormatee} à {hourFormatee}
        </p>
      </div>
      <div className="article__content">
        {onEdition !== true ? (
          <p>{props.article.content}</p>
        ) : (
          <div>
            <h2>Content : </h2>
            <textarea
              value={props.contentEdition}
              onChange={(e) => props.setContentEdition(e.target.value)}
            />
            <p className="msg_error" hidden={contentValueValide}>
              Le contenu doit faire plus de 140 caractères
            </p>
          </div>
        )}
      </div>
      <div className="article__footer">
        {onEdition !== true ? (
          <div>
            <button disabled={props.cardOnEdit} onClick={handleDelete}>
              Supprimer
            </button>
            <button disabled={props.cardOnEdit} onClick={edit}>
              Modifier
            </button>
          </div>
        ) : (
          <button onClick={handleEdit}>Valider</button>
        )}
      </div>
    </div>
  );
};

export default Article;
