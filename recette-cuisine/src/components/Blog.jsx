import React from "react";
import Article from "./Article";
import Formulaire from "./Formulaire";
import HeaderApp from "./HeaderApp";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/blog.css";
const Blog = () => {
  const [articles, setArticles] = React.useState([]);
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");
  const article = {
    author,
    content,
    date: Date.now(),
  };
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
    if (article.author !== "" && article.content !== "") {
      axios.post("http://localhost:3003/articles", article).then((res) => {
        getData();
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3003/articles/" + id).then((res) => {
      getData();
    });
  };

  const handleEdit = (id) => {
    axios.put("http://localhost:3003/articles/" + id, article).then((res) => {
      getData();
    });
  };

  return (
    <div className="blog">
      <HeaderApp></HeaderApp>
      <h1>Blog</h1>
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
          minLength={150}
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div className="article_zone">
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              article={article}
              deleteArticle={handleDelete}
              editArticle={handleEdit}
            ></Article>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
