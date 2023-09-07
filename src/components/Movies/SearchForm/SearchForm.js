import React from "react";
import "./SearchForm.css";
import search from "../../../images/search.svg";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm(props) {
  const [searchQuery, setSearchQuery] = React.useState(
    window.location.pathname === "/movies"
      ? localStorage.getItem("searchQuery") || ""
      : ""
  );
  const [isChecked, setIsChecked] = React.useState(
    window.location.pathname === "/movies"
      ? JSON.parse(localStorage.getItem("isChecked")) || false
      : ""
  );

  React.useEffect(() => {
    if (window.location.pathname === "/movies") {
      localStorage.setItem("searchQuery", searchQuery);
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
    }
  }, [searchQuery, isChecked]);

  React.useEffect(() => {
    if (window.location.pathname === "/movies") {
      setSearchQuery(localStorage.getItem("searchQuery") || "");
      setIsChecked(JSON.parse(localStorage.getItem("isChecked")) || false);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = new RegExp(searchQuery, "i");

    window.location.pathname === "/movies"
      ? props.onSearch(searchQuery, isChecked, regex)
      : props.onSavedMoviesSearch(isChecked, regex);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section>
      <form
        className="search-form"
        onSubmit={handleSubmit}
        disabled={props.isSearching ? true : false}
      >
        <div className="search-form__input-container">
          <img className="search-form__icon" src={search} alt="Иконка поиска" />
          <input
            className="search-form__input"
            type="search"
            placeholder="Фильм"
            required
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="search-form__button btn" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
        />
      </form>
    </section>
  );
}

export default SearchForm;
