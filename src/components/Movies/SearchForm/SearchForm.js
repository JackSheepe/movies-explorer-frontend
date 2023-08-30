import React from "react";
import "./SearchForm.css";
import search from "../../../images/search.svg";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__input-container">
        <img className="search-form__icon" src={search} alt="search" />
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button btn">Найти</button>
        <div className="search-form__separate"></div>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
