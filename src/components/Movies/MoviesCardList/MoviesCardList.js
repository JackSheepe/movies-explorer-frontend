import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  const [visibleCards, setVisibleCards] = React.useState(
    getInitialVisibleCards()
  );

  const resizeTimeout = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);

      resizeTimeout.current = setTimeout(() => {
        setVisibleCards(getInitialVisibleCards());
      }, 1500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, []);

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
    if (screenWidth <= 768) {
      return 2;
    } else {
      return 3;
    }
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__movies">
        {location.pathname === "/saved-movies"
          ? props.resultsOfSavedMoviesSearch.length > 0
            ? props.resultsOfSavedMoviesSearch.map((movie, i) => (
                <MoviesCard key={i} movie={movie} onLike={props.onLike} />
              ))
            : props.savedMovies
                .filter((movie) => movie.isLiked)
                .map((movie, i) => (
                  <MoviesCard key={i} movie={movie} onLike={props.onLike} />
                ))
          : props.resultsOfMoviesSearch.map((movie, i) => (
              <MoviesCard key={i} movie={movie} onLike={props.onLike} />
            ))}
      </ul>
      {location.pathname === "/movies" &&
        visibleCards < props.resultsOfMoviesSearch.length && (
          <button
            type="button"
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
