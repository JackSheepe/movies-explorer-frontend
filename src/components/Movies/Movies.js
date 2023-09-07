import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  props.useDocumentTitle("Фильмы");

  return (
    <main className="movies">
      <SearchForm
        onSearch={props.onSearch}
        isSearching={props.isSearching}
        onSavedMoviesSearch={props.onSavedMoviesSearch}
      />
      {props.isSearchDone ? (
        props.isSearching ? (
          <Preloader />
        ) : props.resultsOfMoviesSearch.length > 0 ? (
          <MoviesCardList
            movies={props.movies}
            onLike={props.onLike}
            resultsOfMoviesSearch={props.resultsOfMoviesSearch}
          />
        ) : (
          <p className="movies__notfound">Ничего не найдено</p>
        )
      ) : (
        <p></p>
      )}
    </main>
  );
}

export default Movies;
