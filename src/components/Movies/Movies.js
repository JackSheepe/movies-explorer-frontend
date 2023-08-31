import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies(props) {
  props.useDocumentTitle("Фильмы");

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={props.movies} />
    </main>
  );
}

export default Movies;
