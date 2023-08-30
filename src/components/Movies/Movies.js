import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies(props) {
  props.useDocumentTitle("Фильмы");

  return (
    <main className="movies">
      <SearchForm />
      <div className="movies__separate"></div>
      <MoviesCardList movies={props.movies} />
    </main>
  );
}

export default Movies;
