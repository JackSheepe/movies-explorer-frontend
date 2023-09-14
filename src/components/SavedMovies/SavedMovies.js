import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  props.useDocumentTitle("Сохранённые Фильмы");

  return (
    <main className="movies movies_saved">
      <SearchForm
        isSearching={props.isSearching}
        onSavedMoviesSearch={props.onSavedMoviesSearch}
        onCheckboxChange={props.onCheckboxChange}
      />
      {props.isSearching ? (
        <Preloader />
      ) : props.savedMovies.length > 0 ? (
        <MoviesCardList
          resultsOfSavedMoviesSearch={props.resultsOfSavedMoviesSearch}
          savedMovies={props.savedMovies}
          onLike={props.onLike}
          isSearchingInSaved={props.isSearchingInSaved}
        />
      ) : (
        <p className="movies__notfound">Ничего не найдено</p>
      )}
    </main>
  );
}

export default SavedMovies;
