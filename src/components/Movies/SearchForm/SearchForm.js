import React from "react";
import "./SearchForm.css";
import search from "../../../images/search.svg";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
  return (
    <section>
      <form className="search-form">
        <div className="search-form__input-container">
          <img className="search-form__icon" src={search} alt="Иконка поиска" />
          <input
            className="search-form__input"
            type="search"
            placeholder="Фильм"
            required
          />
          <button className="search-form__button btn" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
