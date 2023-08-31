import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound(props) {
  const navigate = useNavigate();
  props.useDocumentTitle("404");

  return (
    <main>
      <section className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__heading">404</h1>
          <p className="not-found__text">Страница не найдена</p>
        </div>
        <button
          type="button"
          className="not-found__back btn"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
