import React from "react";

function FilterCheckbox(props) {
  return (
    <div className="search-form__checkbox-container btn">
      <input
        id="checkbox"
        type="checkbox"
        checked={props.isChecked}
        onChange={props.onCheckboxChange}
        className="search-form__checkbox"
      />
      <label
        htmlFor="checkbox"
        className={`search-form__slider ${
          props.isChecked ? "search-form__slider_checked" : ""
        }`}
      >
        <span
          className={`search-form__slider-custom ${
            props.isChecked ? "search-form__slider-custom_checked" : ""
          }`}
        ></span>
      </label>
      <span onClick={props.onCheckboxChange} className="search-form__label">
        Короткометражки
      </span>
    </div>
  );
}

export default FilterCheckbox;
