import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies(props) {
  props.useDocumentTitle("Сохранённые Фильмы");

  return (
    <main className="movies movies_saved">
      <SearchForm
        isSearching={props.isSearching}
        onSavedMoviesSearch={props.onSavedMoviesSearch}
      />
      {props.isSearching ? (
        <Preloader />
      ) : props.savedMovies.length > 0 ? (
        <MoviesCardList
          resultsOfSavedMoviesSearch={props.resultsOfSavedMoviesSearch}
          savedMovies={props.savedMovies}
          onLike={props.onLike}
        />
      ) : (
        <p className="movies__notfound">Ничего не найдено</p>
      )}
    </main>
  );
}

export default SavedMovies;
