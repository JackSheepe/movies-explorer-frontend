import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  const [visibleCards, setVisibleCards] = React.useState(
    getInitialVisibleCards()
  );
  const handleShowMore = () => {
    setVisibleCards(
      (prevVisibleCards) => prevVisibleCards + getAdditionalVisibleCards()
    );
  };

  function getInitialVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 594) {
      return 5;
    } else if (screenWidth <= 768) {
      return 8;
    } else {
      return 12;
    }
  }

  function getAdditionalVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 594) {
      return 1;
    } else if (screenWidth <= 768) {
      return 2;
    } else {
      return 6;
    }
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__movies">
        {location.pathname === "/saved-movies"
          ? props.movies
              .filter((movie) => movie.isLiked)
              .slice(0, visibleCards)
              .map((movie, i) => <MoviesCard key={i} movie={movie} />)
          : props.movies
              .slice(0, visibleCards)
              .map((movie, i) => <MoviesCard key={i} movie={movie} />)}
      </ul>

      {location.pathname === "/saved-movies"
        ? visibleCards <
            props.movies.filter((movie) => movie.isLiked).length && (
            <button
              className="movies-card-list__btn-more btn"
              onClick={handleShowMore}
            >
              Ещё
            </button>
          )
        : visibleCards < props.movies.length && (
            <button
              className="movies-card-list__btn-more btn"
              onClick={handleShowMore}
            >
              Ещё
            </button>
          )}
    </section>
  );
}

export default MoviesCardList;
