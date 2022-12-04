import React from "react";
import Article from "./Article";
import HeaderApp from "./HeaderApp";
import { useEffect } from "react";
import axios from "axios";
import "../styles/blog.css";
const Blog = () => {
  const [articles, setArticles] = React.useState([]);
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");
  const [authorEdition, setAuthorEdition] = React.useState("");
  const [contentEdition, setContentEdition] = React.useState("");
  const [contentValueValide, setContentValueValide] = React.useState(true);

  const [cardOnEdit, setCardOnEdit] = React.useState(false);

  const getData = () => {
    axios.get("http://localhost:3003/articles").then((res) => {
      if (res.data != null) {
        console.log(res.data);
        setArticles(res.data);
      } else {
        setArticles([]);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    setAuthor("");
    setContent("");
    if (author !== "" && content.length > 140) {
      setContentValueValide(true);
      axios
        .post("http://localhost:3003/articles", {
          author: author,
          content: content,
          date: Date.now(),
        })
        .then((res) => {
          getData();
        });
    } else {
      setContentValueValide(false);
    }
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3003/articles/" + id).then((res) => {
      getData();
    });
  };

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3003/articles/" + id, {
        author: authorEdition,
        content: contentEdition,
        date: Date.now(),
      })
      .then((res) => {
        getData();
      });
  };

  return (
    <div className="blog">
      <HeaderApp></HeaderApp>
      <h1>Blog</h1>
      <div className="zoneFormulaire">
        <form className="formulaire" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          ></input>
          <textarea
            placeholder="Contenu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <p className="msg_error" hidden={contentValueValide}>
            Le contenu doit faire plus de 140 caractères
          </p>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="article_zone">
        {articles.map((pArticle) => {
          return (
            <Article
              key={pArticle.id}
              article={pArticle}
              deleteArticle={handleDelete}
              editArticle={handleEdit}
              setAuthorEdition={setAuthorEdition}
              setContentEdition={setContentEdition}
              authorEdition={authorEdition}
              contentEdition={contentEdition}
              setCardOnEdit={setCardOnEdit}
              cardOnEdit={cardOnEdit}
            ></Article>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
