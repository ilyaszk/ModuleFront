import React from "react";
import "../styles/formulaire.css";
import axios from "axios";

const Formulaire = () => {
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      author,
      content,
      date: Date.now(),
    };
    setAuthor("");
    setContent("");
    if (article.author !== "" && article.content !== "") {
      axios.post("http://localhost:3003/articles", article).then((res) => {});
    }
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Auteur"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <textarea
        placeholder="Contenu"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Formulaire;
