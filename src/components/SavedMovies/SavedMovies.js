import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <main className="movies movies_saved">
      <SearchForm />
      <div className="movies__separate"></div>
      <MoviesCardList movies={props.movies} />
    </main>
  );
}

export default SavedMovies;
