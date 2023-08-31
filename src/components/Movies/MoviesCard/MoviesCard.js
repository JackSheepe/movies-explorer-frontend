import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();

  return (
    <li className="movie">
      <div className="movie__img-container">
        <img
          className="movie__img"
          src={props.movie.cover}
          alt={props.movie.name}
        ></img>
        <button
          type="button"
          className={`movie__like-icon btn ${
            location.pathname === "/saved-movies"
              ? "movie__like-icon_delete"
              : props.movie.isLiked
              ? "movie__like-icon_true"
              : "movie__like-icon_false"
          }`}
        >
          {!props.movie.isLiked ? "Сохранить" : ""}
        </button>
      </div>
      <div className="movie__description">
        <h2 className="movie__name">{props.movie.name}</h2>
        <p className="movie__length">{props.movie.time}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
