import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = React.useState(props.movie.isLiked);

  function handleImgClick() {
    window.open(props.movie.trailerLink, "_blank");
  }

  function handleLikeClick() {
    props
      .onLike(props.movie, isLiked)
      .then(() => {
        setIsLiked(!isLiked);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <li className="movie">
      <div className="movie__img-container">
        <img
          className="movie__img btn"
          src={
            typeof props.movie.image === "object"
              ? `https://api.nomoreparties.co${props.movie.image.url}`
              : props.movie.image
          }
          alt={props.movie.nameRU}
          onClick={handleImgClick}
        ></img>
        <button
          onClick={handleLikeClick}
          type="button"
          className={`movie__like-icon btn ${
            location.pathname === "/saved-movies"
              ? "movie__like-icon_delete"
              : isLiked
              ? "movie__like-icon_true"
              : "movie__like-icon_false"
          }`}
        >
          {!isLiked ? "Сохранить" : ""}
        </button>
      </div>
      <div className="movie__description">
        <h2 className="movie__name">{props.movie.nameRU}</h2>
        <p className="movie__length">
          {props.movie.duration > 60
            ? `${Math.floor(props.movie.duration / 60)}ч ${
                props.movie.duration % 60
              }м`
            : `${props.movie.duration}м`}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
